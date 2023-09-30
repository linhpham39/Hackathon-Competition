import Nav from "../nav/Nav";
import Head from "../head/Head";
import "./rescue.css";

const Rescue = () => {
    const victims = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            type: "Hỏa hoạn",
            location: "14 Đống Đa, Hà Nội, Việt Nam",
            time: "2 phút trước",
            distance: "0.5 km"
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            type: "Hỏa hoạn",
            location: "14 Đống Đa, Hà Nội, Việt Nam",
            time: "2 phút trước",
            distance: "0.5 km"
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            type: "Bị kẹt",
            location: "14 Đống Đa, Hà Nội, Việt Nam",
            time: "15 phút trước",
            distance: "3 km"
        },

        // <div className="scanning">
        //     {/* <img src='scan_icon.svg'></img> */}
        //     <RadarIcon className="scanIcon" style={{width:'50%'}}/>
        // </div>
    ]
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
                    ))
                    }
                </ul>
            </div>
            <Nav activeItem="rescue" />
        </div>
    )
}

export default Rescue