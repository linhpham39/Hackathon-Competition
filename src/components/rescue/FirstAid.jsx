import './firstAid.css'
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const FirstAid = () => {
    return (
        <div className="firstAid">
            <div className="senderHeader">
                <div className="senderHeaderContext">
                    <Link to='/rescue'>
                        <AiOutlineLeft className="backIcon" />
                    </Link>
                    <p>Hướng dẫn sơ cứu</p>
                </div>
            </div>

            <div className="firstAidContainer">
                <img src='first-aid_background.svg'></img>
            </div>

            <div className="firstAidContent">
                <h2>Mô tả</h2>
                <hr></hr>
                <p className="content">
                    Để chống nhiễm khói, bạn cần lấy <span style={{color:'red'}}>khăn thấm nước</span> che kín miệng
                    và mũi để lọc không khí khi hít thở hoặc có thể sử dụng 
                    mặt nạ chống khói khi được trang bị.
                </p>

                <div className="firstAidbtn">
                    <button>
                        <img src='/back_icon.svg'></img>
                        Trước
                    </button>
                    <img src='/red-dot_icon.svg'></img>
                    <img src='/grey-dot_icon.svg'></img>
                    <img src='/grey-dot_icon.svg'></img>
                    <img src='/grey-dot_icon.svg'></img>
                    <button>
                        Sau
                        <img src='/white-next_icon.svg'></img>
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default FirstAid;