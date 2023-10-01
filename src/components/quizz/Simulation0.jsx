import './simulation.css'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const Simulation = () => {
    return (
        <div className="simulation">
            <div className="senderHeader">
                <div className="senderHeaderContext">
                    <Link to='/rescue'>
                        <AiOutlineLeft className="backIcon" />
                    </Link>
                    <p>Hỏa hoạn - Mô phỏng</p>
                </div>
            </div>

            <div className="simulationContainer">
                <img src='simulation.svg' style={{ width: '100%' }}></img>
            </div>
            <div className="dot-simulation">
                <img className='dot-1' src='/red-dot_icon.svg'></img>
                <img className='dot-2' src='/red-dot_icon.svg'></img>
                <img className='dot-3' src='/red-dot_icon.svg'></img>
                <img className='dot-4' src='/red-dot_icon.svg'></img>
            </div>

            <div className="simulationContent">
                <h2>Mô tả</h2>
                <hr></hr>
                <p className="content">
                    Căn nhà này đang có nguy cơ xảy ra <span style={{ color: 'red' }}>hoả hoạn</span>. Nhấn vào từng đồ vật được đánh dấu
                    để tìm hiểu nguyên nhân và cách xử lí nhanh chóng trong
                    những trường hợp như trên.
                </p>
                <Link to='/simulation-detail'>
                <div className="simulationstartbtn">
                    <div className="simulationstartbtn_background"></div>
                    <div className="simulationstartbtn_text">Bắt đầu</div>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Simulation;