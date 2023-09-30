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

                    <button className="sosButton">
                        <span className="sosTitle">SOS</span>
                    </button>


                    <div className="sosDecs">
                        <p>Sau đây là một số hướng dẫn an toàn bạn nên áp dụng
                            để giải cứu chính mình và mọi người xung quanh
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SosConfirm;
