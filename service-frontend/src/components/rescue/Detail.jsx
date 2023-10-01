import './detail.css'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import Nav from '../nav/Nav';
import { useState, useEffect } from 'react';
import { ref, get } from 'firebase/database';
import { database } from '../authentication/firebase';
const Detail = () => {
    let userid = useParams().userid;
    let sosid = useParams().id;

    
    const [person, setPerson] = useState({
        name: '',
        phone: '',
        location: '',
        desc: '',
        type: ''
    });

    useEffect(() => {
        console.log(userid, sosid);
        const dbref = ref(database, 'sos_message/' + userid + '/' + sosid);
        get(dbref).then((snapshot) => {
            let data = snapshot.val();
            console.log(data);
            fetch(`http://api.positionstack.com/v1/reverse?access_key=c2320456f45f9af02b7fe8799f41f5f6&query=${data.lat},${data.long}`)
                .then(res => res.json())
                .then(data2 => {
                    if (data2.data.length > 0) {
                        data.location = data2.data[0].label;
                        setPerson(data);
                    }
                })
            
        })
    }, [])



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