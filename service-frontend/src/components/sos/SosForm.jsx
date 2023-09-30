import './sosForm.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const SosForm = () => {

    const [selectedTargets, setSelectedTargets] = useState([]);

    const handleTargetClick = (index) => {
        console.log('Clicked index:', index);
        // Toggle selection for the clicked target
        setSelectedTargets(prevSelectedTargets => {
            if (prevSelectedTargets.includes(index)) {
                return prevSelectedTargets.filter(item => item !== index);
            } else {
                return [...prevSelectedTargets, index];
            }
        });
    };

    const isTargetSelected = (index) => {
        console.log('Is index selected:', index, selectedTargets.includes(index));
        return selectedTargets.includes(index);
    };

    return (
        <div className="sosForm">
            <div className="header">
                <p>Gửi tín hiệu cầu cứu</p>
            </div>

            <div className="locationContainer">
                <div className="locationIcon">
                    <LocationOnIcon style={{ fontSize: '40px', color: '#979797' }} />
                </div>
                <div className="location">
                    <p className="locationTitle">Vị trí hiện tại của bạn</p>
                    <p className="locationDesc">14 Hà Đông, Hà Nội, Việt Nam</p>
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
                            <img src="/earthquake_icon.svg" />
                            <span>Động đất</span>
                        </button>
                    </li>
                    <li className={`item ${isTargetSelected(3) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(3)}>
                            <img src="/helmet_icon.svg" />
                            <span>Bị kẹt</span>
                        </button>
                    </li>
                    <li className={`item ${isTargetSelected(4) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(4)}>
                            <img src="/warning_icon.svg" />
                            <span>Khác</span>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="target">
                <p>Ai đang cần sự giúp đỡ</p>
                <ul className="listTarget">
                    <li className={`target ${isTargetSelected(5) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(5)}>Chỉ mình tôi</button>
                    </li>
                    <li className={`target ${isTargetSelected(6) ? 'active' : ''}`}>
                        <button onClick={() => handleTargetClick(6)}>Người khác</button>
                    </li>
                </ul>
            </div>

            <div className="desc">
                <p>Mô tả thêm (không bắt buộc)</p>
                <textarea name="desc" id="desc"
                    cols="30" rows="10" placeholder="Mô tả ngắn gọn vấn đề của bạn">
                </textarea>
            </div>

            <div className="submit-img">
                <button>
                    <img src="/photo_icon.svg" alt='submitIcon' />
                    <p className="add-img">Thêm ảnh/ audio</p>
                </button>
            </div>
            <Link to='/confirm'>
                <div className="submit">
                    <button >Gửi</button>
                </div>
            </Link>
        </div>
    )
}

export default SosForm