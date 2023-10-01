import './homepage.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Nav from '../nav/Nav';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const name = "Huỳnh Ngọc Khánh Linh";
    const subjects = [
        {
            title: "Đuối nước",
            image: "/duoi-nuoc_icon.svg"
        },
        {
            title: "Hỏa hoạn",
            image: "/hoa-hoan_icon.svg"
        },
        {
            title: "Giông bão",
            image: "/do-cay_icon.svg"
        },
        {
            title: "Bị lạc",
            image: "/bi-lac_icon.svg"
        },
        {
            title: "Sạt lở",
            image: "/sat-lo_icon.svg"
        },
        {
            title: "Tai nạn",
            image: "/tai-nan_icon.svg"
        }
    ]

    // State variable to control the visibility of the pop-up
    const [showPopup, setShowPopup] = useState(false);

    // State variable to store the selected subject
    const [selectedSubject, setSelectedSubject] = useState(null);

    // Function to handle subject click and show the pop-up
    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
        setShowPopup(true);
    };

    // Function to handle pop-up option click
    const handleOptionClick = (option) => {
        // Redirect to "/general" when an option is selected
        if (option === 'Option1' ) {
            window.location.href = '/general';
        }else if(option === 'Option2'){
            window.location.href = '/simulation';
        }
    };

    // Function to close the pop-up
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="subjects">
            <div className="subjectHeader">
                <img className="avatar" src="/avatar_icon.svg" alt="avatar" />
                <p>{name}</p>
                <NotificationsIcon style={{ color: 'white' }} />
            </div>

            <div className="subjectBody">
                <h1>Chọn 1 chủ đề để bắt đầu</h1>

                <div className="subjectList">
                    {subjects.map((subject, index) => (
                        <div
                            className="subject"
                            key={index}
                            onClick={() => handleSubjectClick(subject)} // Handle subject click
                        >
                            <img src={subject.image} alt={subject.title} />
                            <p>{subject.title}</p>
                        </div>
                    ))}
                </div>

                {showPopup && (
                    <>
                        <div className="overlay"></div> {/* Add overlay */}
                        <div className="subjectPopup">
                            <span className="closeIcon" onClick={handleClosePopup}>
                                &#x2716; {/* This is a close symbol (X) */}
                            </span>
                            <div onClick={() => handleOptionClick('Option1')} className="choiceContainer">
                                <div className="choiceContainerColor colorAbove" ></div>
                                <div className="choiceContent contentAbove">Học qua trắc nghiệm</div>
                            </div>
                            <div onClick={() => handleOptionClick('Option2')} className="choiceContainer">
                                <div className="choiceContainerColor colorBelow" ></div>
                                <div className="choiceContent contentBelow">Học qua mô phỏng</div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Nav />
        </div>
    )
}

export default Homepage;