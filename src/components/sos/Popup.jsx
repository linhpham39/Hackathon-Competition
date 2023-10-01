import React from 'react';
import "./popup.css";
import { Link } from 'react-router-dom';

const Popup = ({ isOpen, onCancel, onConfirm }) => {
  return (
    isOpen && (
      <div className="popup-container">
        <div className="popup">
          <p>Bạn có muốn gửi tín hiệu cầu cứu?</p>
          <div className="button-container">
            <Link to="/form">
                <button onClick={onConfirm} className='buttonOn'>Có</button>
            </Link>  
            <button onClick={onCancel} className='buttonOff'>Không</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
