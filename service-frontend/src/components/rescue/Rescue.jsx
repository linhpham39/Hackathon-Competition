import Nav from "../nav/Nav";
import Head from "../head/Head";
import "./rescue.css";
import { Link } from "react-router-dom";
import { onValue, ref, get, push, on } from "firebase/database";
import { auth, database } from "../authentication/firebase";
import { useEffect, useState } from "react";
const Rescue = () => {

    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371 * 1000; // Radius of the earth in m
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        if (c < 0) c += Math.PI * 2;
        if (c > Math.PI * 2) c -= Math.PI * 2;
        if (c > Math.PI) c = Math.PI * 2 - c;
        if (R * c > 6000) {
            return 0;
        }
        return R * c; // Distance in m
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }

    const [victims, setVictims] = useState([])
    let dbref = ref(database, 'sos_message/');

    useEffect(() => {
        onValue(dbref, (snapshot) => {
            const newVictims = victims;
            let data = snapshot.val();
            for (let userid in data) {
                let user = data[userid];
                for (let sosid in user) {
                    let sos = user[sosid];
                    sos.id = sosid.toString();
                    sos.userid = userid.toString();
                    navigator.geolocation.getCurrentPosition((position) => {
                        let lat = position.coords.latitude;
                        let long = position.coords.longitude;
                        let lat2 = sos.lat;
                        let long2 = sos.long;
                        let distance = getDistanceFromLatLonInKm(lat, long, lat2, long2);
                        sos.distance = distance.toFixed(2) + 'm';
                        fetch(`http://api.positionstack.com/v1/reverse?access_key=c2320456f45f9af02b7fe8799f41f5f6&query=${lat},${long}`).then(res => res.json()).then(data => {
                            sos.location = data.data[0].label;
                            sos.time = new Date(sos.time).toLocaleString();
                            sos.type = sos.type;
                            //check if sos is already in list
                            let found = false;
                            for (let i = 0; i < newVictims.length; i++) {
                                if (newVictims[i].id == sos.id) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                newVictims.push(sos);
                                let avoid = [...newVictims];
                                setVictims(avoid);
                            }

                        }
                        )
                    });

                }
            }
            

        })
    })

    return (
        <div className="rescue">
            <Head />
            <div className="rescueContainer">
                <div id="radar">
                    <div class="beacon" id="beacon"></div>
                    <div class="beacon" id="beacon-75"></div>
                    <div class="beacon" id="beacon-50"></div>
                    <div class="beacon" id="beacon-25"></div>
                    <div class="circle" id="circle-big"></div>
                    <div class="circle" id="circle-medium"></div>
                    <div class="circle" id="circle-small"></div>
                    <div class="circle" id="dot"></div>
                    <div id="vertical"></div>
                    <div id="horizontal"></div>
                </div>
                <ul className="listVictim">
                    {victims.map((victim, index) => (
                        <Link to={`/rescue/${victim.userid}/${victim.id}`}>
                            <li key={index} className="victim">
                                <div className="image">
                                    <div className="type">
                                        <img className='typeImg' src={victim.type == 'Hỏa hoạn' ? './fire_icon.svg' : 'water_icon.svg'}></img>
                                        <p>{victim.type}</p>
                                    </div>
                                    <img className="avatar" src='avatar_icon.svg'></img>
                                </div>
                                <div className="info">
                                    <p className='name'>{victim.name}</p>
                                    <p className="location">{victim.location}</p>
                                    <p className="time">{victim.time}</p>
                                </div>
                                <div className="distance">
                                    <p>{victim.distance}</p>
                                </div>
                            </li>
                        </Link>
                    ))
                    }
                </ul>
            </div>
            <Nav activeItem="rescue" />
        </div>
    )
}

export default Rescue