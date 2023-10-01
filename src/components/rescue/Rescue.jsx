import Nav from "../nav/Nav";
import Head from "../head/Head";
import "./rescue.css";
import { Link } from "react-router-dom";

const Rescue = () => {
    const victims = [
        {
            id: 1,
            name: "Huỳnh Khánh Linh",
            type: "Hỏa hoạn",
            phone: "0123456789",
            location: "18 Đ.Tam Trinh, Mai Động, Hai Bà Trưng, Hà Nội, Việt Nam",
            time: "1 phút trước",
            desc: "Tôi đang gặp hỏa hoạn ở tầng 26, cứu tôi!",
            distance: "0.5 km"
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            type: "Hỏa hoạn",
            phone: "0123456789",
            location: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam",
            time: "2 phút trước",
            desc: "Tôi đang ở tầng 10, trong phòng tôi có cửa sổ và ban công, xin hãy giúp tôi!",
            distance: "0.5 km"
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            type: "Bị kẹt",
            location: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam",
            time: "15 phút trước",
            distance: "3 km",
            desc: "Tôi đang bị bắt cóc, xin hãy giúp tôi!",
            phone: "0123456789"
        }
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
                        <Link to = {`/rescue/${victim.id}`}>
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