import ToggleSos from '../toggle/ToggleSos';
import audioFile from './recording0.wav';
import React, { useRef, useState } from 'react';
import './safeGuide.css';

const SafeGuide = () => {
    const guides = [
        'Thật bình tĩnh khi phát hiện cháy nổ',
        'Cảnh báo cho mọi người xung quanh',
        'Dập tắt đám cháy nếu có thể',
        'Xác định lối thoát an toàn',
        'Luôn giữ cơ thể thấp khi di chuyển'
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
    };

    return (
        <div className="safeGuide">
            <ToggleSos />
            <div className="guides">
                <h2 className='guideTitle'><img src='/speaker_icon.svg'></img>HƯỚNG DẪN AN TOÀN</h2>
                <ul className="listGuide">
                    {guides.map((guide, index) => (
                        <li key={index} className="itemGuide">
                            <img src='/tick-circle_icon.svg'></img>{guide}
                        </li>
                    ))}
                </ul>

                <div className="playSound">
                    <audio ref={audioRef} src={audioFile} onEnded={handleAudioEnd} />
                    <img onClick={handlePlay} src={isPlaying ? '/pause_icon.svg' : '/play_icon.svg'} alt="Play" />
                    <p>Ấn vào để nghe âm thanh</p>
                </div>
            </div>
        </div>
    );
};

export default SafeGuide;
