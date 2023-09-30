import './detail.css'

const Detail = () => {
    const person = {
        name: 'Nguyễn Thị A',
        phone: '0123456789',
        type: 'Hỏa hoạn',
        location: 'KTX khu B, ĐHQG TP.HCM',
        desc: 'Tôi đang bị bắt cóc, xin hãy giúp tôi!'
    }
    return (
        <div className="detail">
            <div className="heading">
                <img src='back_icon.svg'></img>
                <p>Tín hiệu cầu cứu</p>
            </div>

            <div className="infoContainer">
                <div className="info-1">
                    <div className="info-1-left">
                        <img src='/avatar_icon.svg'></img>
                    </div>
                    <div className="info-1-right">
                        <p>{person.name}</p>
                        <div className="type">
                            <img className='typeImg' src={person.type == 'Hỏa hoạn' ? './fire_icon.svg' : 'water_icon.svg'}></img>
                            <p>{person.type}</p>
                        </div>
                    </div>  
                </div>

                <div className="info-2">
                    <div className="info-detail">
                        <p className="title">
                            Vị trí hiện tại
                        </p>
                        <p className="content">
                            {person.location}
                        </p>
                    </div>
                    <div className="info-detail">
                        <p className="title">
                            Liên hệ
                        </p>
                        <p className="content">
                            {person.phone}
                        </p>
                    </div>
                    <div className="info-detail">
                        <p className="title">
                            Mô tả thêm
                        </p>
                        <p className="content">
                            {person.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;