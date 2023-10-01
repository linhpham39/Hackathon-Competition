import './homepage.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Nav from '../nav/Nav';
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
            title: "Đổ cây",
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
    return (
        <div className="subjects">
            <div className="subjectHeader">
                <img className="avatar" src="/avatar_icon.svg" alt="avatar" />
                <p>{name}</p>
                <NotificationsIcon style={{color:'white'}}/>
            </div>

            <div className="subjectBody">
                <h1>Chọn 1 chủ đề để bắt đầu</h1>
            
                <div className="subjectList">
                    {subjects.map((subject, index) => (
                        <Link to="/general">
                        <div className="subject" key={index}>
                            <img src={subject.image} alt={subject.title} />
                            <p>{subject.title}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Nav/>
        </div>
    )
}

export default Homepage;