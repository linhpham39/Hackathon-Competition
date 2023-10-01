import "./head.css"
import NotificationsIcon from '@mui/icons-material/Notifications';

const Head = () => {
    return (
        <div className="navbar">
            <div className="navleft">Chào <span className="name"> Khánh Linh,</span></div>
            <div className="navright">
                <NotificationsIcon />
            </div>
        </div>
    )
}

export default Head