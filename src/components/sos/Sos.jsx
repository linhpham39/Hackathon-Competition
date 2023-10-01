import React, { useState } from 'react';
import "./sos.css";
import "../shared/shared.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Head from "../head/Head";
import Nav from "../nav/Nav";
import Popup from "./Popup";


const Sos = () => {
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const handleSosButtonClick = () => {
        setIsConfirmationOpen(true);
    };

    const handleCancel = () => {
        setIsConfirmationOpen(false);
    };

    const handleConfirm = () => {
        // Send SOS signal logic here
        console.log("SOS signal sent!");
        setIsConfirmationOpen(false);
    };

    return (
        <div className="container">
            <div className="sosContainer">
                <Head />
                <div className="body">
                    <div className="bodyText">
                        <h2 className="title">Bạn có đang gặp nguy hiểm?</h2>
                        <p className="desc">
                            Nhấn nút SOS bên dưới, vị trí của bạn sẽ được định vị qua GPS gửi đến những người thân và người xung quanh bạn
                        </p>
                    </div>

                    <button className="sosButton" onClick={handleSosButtonClick}>
                        <span className="sosTitle">SOS</span>
                        <br></br>
                        Nhấn giữ nút này
                    </button>

                    <div className="locationContainer">
                        <div className="locationIcon">
                            <LocationOnIcon style={{ fontSize: '40px', color: '#979797' }} />
                        </div>
                        <div className="location">
                            <p className="locationTitle">Vị trí hiện tại của bạn</p>
                            <p className="locationDesc">18 Đ.Tam Trinh, Mai Động, Hai Bà Trưng, Hà Nội, Việt Nam</p>
                        </div>
                        <div className="rightClickIcon">
                            <ChevronRightIcon style={{ fontSize: '40px', color: '#979797' }} />
                        </div>
                    </div>
                </div>

                <Nav activeItem="sos" />
            </div>

            <Popup
                isOpen={isConfirmationOpen}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
            />
        </div>
    )
}

export default Sos;
