import './toggleSos.css'
import { useState } from 'react';

const ToggleSos = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        console.log(isChecked);
        setTimeout(() => {
        if(!isChecked)
            //navigate to sos page
            window.location.href = '/safe-confirm';
        }, 600);
    };
    return (
        <div className="slideWindow">
            <label className="toggle">
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className={`slider ${isChecked ? 'green' : ''}`} />
                <span className="text-wrapper">
                    {isChecked ? 'Tôi đã an toàn' : 'Trượt nếu bạn cảm thấy an toàn'}
                </span>
            </label>
        </div>
    )
}

export default ToggleSos