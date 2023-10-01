
import './onboard.css'
import "../shared/shared.css";
import { useState } from 'react';


const Onboard = () => {

    const [stage, setStage] = useState(0);
    const [title, setTitle] = useState("Xin chào");
    const [text, setText] = useState("Chào mừng bạn đến với WESA.Cùng trải nghiệm cuộc sống an toàn mọi lúc, mọi nơi!");
    const titles = [
        "Xin chào", 
        "Hỗ trợ khẩn cấp chỉ với một chạm", 
        "Trang bị kĩ năng sống cho bản thân và gia đình"
    ];

    const texts = [
        "Chào mừng bạn đến với WESA.Cùng trải nghiệm cuộc sống an toàn mọi lúc, mọi nơi!",
        "Tự động kết nối và nhanh chóng gửi tín hiệu khẩn cấp tới người thân, người xung quanh trong trường hợp nguy hiểm",
        "Tự tin bảo vệ bản thân và những người xung quanh qua việc học và kiểm tra kiến thức về sơ cứu, kĩ năng khi gặp nạn."
    ];

    const handleNext = () => {
        console.log("moving to " + (stage + 1));
        let newstate = stage + 1;
        if (newstate > 2) {
            window.location.href = "/login";
            // animate


            
            

            newstate = 0;
            // Navigate to home page
            
        }
        setTitle(titles[newstate]);
        setText(texts[newstate]);
        setStage(newstate);

    }

    const handleBack = () => {
        console.log("moving to " + (stage - 1));
        let newstate = stage - 1;
        if (newstate < 0) {
            newstate = 0;
        }
        setTitle(titles[newstate]);
        setText(texts[newstate]);
        setStage(newstate);
    }


    return (
        <div className="container">
            <div className="childOnboardContainer">
                <div className="logoHeader">

                </div>
                <h1 id="onboardTitle">{title}</h1>
                <p id="onboardText">{text}</p>
                <div id="onboardProgress">
                    <div id="onboardProgressBar">
                        <div id="onboardProgressFill" style={{left: (stage ) * 100/3 + "%"}}></div>
                    </div>
                </div>
                <div className="onboardButtons">
                    <button className="onboardButton" onClick={handleBack}>Back</button>
                    <button className="onboardButton" onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Onboard