import ToggleSos from '../toggle/ToggleSos'
import './safeGuide.css'


const SafeGuide = () => {
    const guides = [
        'Thật bình tĩnh khi phát hiện cháy nổ',
        'Cảnh báo cho mọi người xung quanh',
        'Dập tắt đám cháy nếu có thể',
        'Xác định lối thoát an toàn',
        'Luôn giữ cơ thể thấp khi di chuyển'
    ]

    return (
        <div className="safeGuide">
            <ToggleSos/>
            <div className="guides">
                <h2 className='guideTitle'><img src='/speaker_icon.svg'></img>HƯỚNG DẪN AN TOÀN</h2>
                <ul className="listGuide">
                    {guides.map((guide, index) => (
                        <li key={index} className="itemGuide">
                            <img src='/tick-circle_icon.svg'></img>{guide}
                        </li>
                    ))
                    }
                </ul>

                <div className="playSound">
                    <img src='/play_icon.svg'></img>
                </div>
            </div>
            

        </div>
    )
}

export default SafeGuide