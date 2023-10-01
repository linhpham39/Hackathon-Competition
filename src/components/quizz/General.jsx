import './general.css'
import { Link } from 'react-router-dom'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Nav from '../nav/Nav';

const General = () => {
    const type = "Hỏa hoạn";
    const listQuizzs = [
        {
            level: "Mức độ 1",
            image: "/quizz_icon.svg",
            noQuizzs: 10
        },
        {
            level: "Mức độ 2",
            image: "/quizz_icon.svg",
            noQuizzs: 10
        },
        {
            level: "Mức độ 3",
            image: "/quizz_icon.svg",
            noQuizzs: 15
        },
        {
            level: "Mức độ 4",
            image: "/quizz-lock_icon.svg",
            noQuizzs: 15
        }
    ]
    return (
        <div className="general">
            <div className="generalHeader">
                <Link to='/quizz'>
                    <img className="back" src="/back_icon.svg" alt="back" />
                </Link>
                <p>{type}</p>
                <NotificationsIcon style={{ color: 'white' }} />
            </div>

            <div className="generalBody">
                <img className='background' src='quizz-background.svg'></img>
                <div className="listQuizz">
                    {listQuizzs.map((quizz, index) => (
                            <Link to='/quizz-detail'>
                            <div className="quizz" key={index}>
                                <img src={quizz.image} alt={quizz.level} />
                                <div className="quizz-info">
                                    <p className='level'>{quizz.level}</p>
                                    <p>{quizz.noQuizzs} câu hỏi</p>
                                </div>
                                <img className='backIcon' src='/next_icon.svg'></img>
                            </div>
                            </Link>
                    ))}
                </div>
            </div>

            <Nav />
        </div>
    )
}

export default General