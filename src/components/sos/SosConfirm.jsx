import React from 'react';
import './sosConfirm.css';
import ToggleSos from '../toggle/ToggleSos';
import { Link } from 'react-router-dom';

const SosConfirm = () => {


    return (
        <div className="sosConfirm">
            <div className="confirmContainer">
                <ToggleSos />
                <Link to="/safe-guide">
                    <h2 className= 'msg'>ĐÃ GỬI TÍN HIỆU CẦU CỨU</h2>
                    <button className="sosButton">
                        <span className="sosTitle">SOS</span>
                    </button>


                    <div className="sosDecs">
                        <p>Ấn vào màn hình để xem Hướng Dẫn An Toàn
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SosConfirm;
