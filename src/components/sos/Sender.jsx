import React from 'react';
import './sender.css';
import { Link } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
const Sender = () => {


  return (
    <div className="sender">
      <div className="senderContainer">
        <div className="senderHeader">
          <div className="senderHeaderContext">
            <AiOutlineLeft className="backIcon" />
            <p>Gửi tín hiệu cầu cứu</p>
          </div>
        </div>

        <div className="senderChoices">
          <Link to="/form">
            <div className="choice_option">
              <img src="https://i.ibb.co/8zdqrQW/image-2.png" alt="mic" />
              <div className="choiceText">
                <p>Gửi tín hiệu bằng văn bản</p>
              </div>
            </div>
          </Link>
          <Link to="/form">
            <div className="choice_option">
              <img src="https://i.ibb.co/RcRS4BR/image-3.png" alt="mic" />
              <div className="choiceText">
                <p>Yêu cầu trợ giúp từ trợ lí ảo</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Sender;
