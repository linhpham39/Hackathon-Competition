import './detail.css'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Nav from '../nav/Nav';

const Detail = () => {
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
    const id = useParams().id;
    console.log(id);
    const person = victims[0];
    console.log(person.type == 'Hỏa hoạn');

    const openGoogleMap = () => {
        console.log('open google map');
        window.open('https://www.google.com/maps/search/?api=1&query='+person.location, '_blank').focus();
    }
    const openFirstAid = ()=>{
        window.location.href = '/first-aid';
    }

    return (
        <div className="detail">
            <div className="senderHeader">
                <div className="senderHeaderContext">
                    <Link to='/rescue'>
                        <AiOutlineLeft className="backIcon" />
                    </Link>
                    <p>Gửi tín hiệu cầu cứu</p>
                </div>
            </div>
            <div className="infoContainer">
                <div className="info-1">
                    <div className="info-1-left">
                        <img src='/avatar_icon.svg'></img>
                    </div>
                    <div className="info-1-right">
                        <p>{person.name}</p>
                        <img src=''></img>
                        <div className="type">
                            <img className='typeImg' src={person.type == 'Hỏa hoạn' ? '/fire_icon.svg' : '/water_icon.svg'}></img>
                            <p>{person.type}</p>
                        </div>
                    </div>  
                </div>

                <div className="info-2">
                    <div className="info-detail">
                        <p className="info-title">
                            Vị trí hiện tại
                        </p>
                        <p className="content">
                            {person.location}
                        </p>
                    </div>
                    <div className="info-detail">
                        <p className="info-title">
                            Liên hệ
                        </p>
                        <p className="content">
                            {person.phone}
                        </p>
                    </div>
                    <div className="info-detail">
                        <p className="info-title">
                            Mô tả thêm
                        </p>
                        <p className="content">
                            {person.desc}
                        </p>
                    </div>

                </div>

            <div className="options">
                <div  onClick={openGoogleMap} className="option option1">
                    <img src='/google-maps_icon.svg'></img>
                    <p>Mở Google Map</p>
                </div>
                <div onClick={openFirstAid} className="option option2">
                    <img src='/first-aid_icon.svg'></img>
                    <p>Hướng dẫn sơ cứu</p>
                </div>
            </div>
            </div>
            <Nav />
        </div>
    );
}

export default Detail;