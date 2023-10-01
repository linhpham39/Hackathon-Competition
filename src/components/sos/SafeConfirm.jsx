import React from "react";
import "./safeConfirm.css";
import { Link } from "react-router-dom";

const SafeConfirm = () => {
    return (
        <div className="safe-screen">
            <div className="safe-screen-container">
                <div className="heading">
                    <img className="shield-icon" alt="Ic round shield" src="/shield_icon.svg" />
                    <div className="text-wrapper-1">Xác nhận an toàn</div>
                </div>
                <img className="teenyicons-tick" alt="Teenyicons tick" src="/tick-circle-solid_icon.svg" />
                <p className="text-wrapper-2">Chúng tôi đã nhận được tín hiệu! Rất vui mừng vì bạn đã an toàn</p>
                <Link to="/education">
                <div className="button">
                    <div className="text-wrapper-3">OK</div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default SafeConfirm;