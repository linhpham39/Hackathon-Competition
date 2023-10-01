import './sosForm.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { useEffect } from 'react';
import { ref, get, push } from 'firebase/database';
import { auth, database } from '../authentication/firebase'
const SosForm = () => {

    const [selectedTargets, setSelectedTargets] = useState([]);
    const [location, setLocation] = useState('18 Đ.Tam Trinh, Mai Động, Hai Bà Trưng, Hà Nội, Việt Nam');
    const thongtin = [
        'Hỏa hoạn',
        'Đuối nước',
        'Tai nạn',
        'Khác'
    ]

/* 
    useEffect(() => {
        setSelectedTargets([3]);
        console.log("Getting location");
        let lat = 0, long = 0;
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(lat, long);
            fetch(`http://api.positionstack.com/v1/reverse?access_key=c2320456f45f9af02b7fe8799f41f5f6&query=${lat},${long}`)
                .then(res => res.json())
                .then(data => {
                    if (data.data.length > 0) {
                        setLocation(data.data[0].label);
                    }
                })
        })

    }, [])

    const handleSend = () => {
        let typeSos = thongtin[selectedTargets[0]];
        console.log(typeSos);
        let desc = document.getElementById('desc').value;
        let uid = auth.currentUser.uid;
        let userdata = ref(database, 'users/' + uid);
        console.log('userdata', userdata);
        get(userdata).then((snapshot) => {
            console.log('snapshot', snapshot);
            let email = snapshot.val().email;
            let name = snapshot.val().name;
            let phone = snapshot.val().phone;
            let dbref = ref(database, 'sos_message/' + uid + '/');
            let lat, long;
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                push(dbref, {
                    type: typeSos,
                    desc: desc,
                    location: location,
                    time: new Date().toLocaleString(),
                    phone: phone,
                    name: name,
                    lat: lat,
                    long: long,
                });
                window.location.href = '/confirm';
            });
            
        }
        )

    }; */




    const handleTargetClick = (index) => {
        // Turn off other 
        setSelectedTargets([index]);

    };

    const isTargetSelected = (index) => {
        return selectedTargets.includes(index);
    };

    return (
        <div className="sosForm">
            <div className="senderHeader">
                <div className="senderHeaderContext">
                    <Link to='/sos'>
                        <AiOutlineLeft className="backIcon" />
                    </Link>
                    <p>Gửi tín hiệu cầu cứu</p>
                </div>
            </div>

            <div className="locationContainer">
                <div className="locationIcon">
                    <LocationOnIcon style={{ fontSize: '40px', color: '#979797' }} />
                </div>
                <div className="location">
                    <p className="locationTitle">Vị trí hiện tại của bạn</p>
                    <p className="locationDesc">{location}</p>
                </div>
                <div className="rightClickIcon">
                    <ChevronRightIcon style={{ fontSize: '40px', color: '#979797' }} />
                </div>
            </div>

            <div className="typesos">
                <p>Bạn đang gặp vấn đề liên quan đến:</p>
                <ul className="listTypeSos">
                    <li className={`item ${isTargetSelected(0) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(0)}>
                            <img src="/fire_icon.svg" alt='fireIcon' />
                            <span>Hỏa hoạn</span>
                        </button>
                    </li>
                    <li className={`item ${isTargetSelected(1) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(1)}>
                            <img src="/water_icon.svg" />
                            <span>Đuối nước</span>
                        </button>
                    </li>
                    <li className={`item ${isTargetSelected(2) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(2)}>
                            <img src="/helmet_icon.svg" />
                            <span>Tai nạn</span>
                        </button>
                    </li>
                    <li className={`item ${isTargetSelected(3) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(3)}>
                            <img src="/warning_icon.svg" />
                            <span>Khác</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="desc">
                <p>Mô tả thêm (không bắt buộc)</p>
                <textarea name="desc" id="desc"
                    cols="30" rows="10" placeholder="Mô tả ngắn gọn vấn đề của bạn">
                </textarea>
            </div>

            <Link to='/confirm'>
            <div className="submit">
                <button>Gửi tín hiệu cầu cứu</button>
            </div>
            </Link>
        </div>
    )
}

export default SosForm