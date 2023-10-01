import Nav from '../nav/Nav'
import "../shared/shared.css";
import './location.css'

const Location = () => {
    return (
        <div className="container">
            <div className="childlocationContainer">
            Location
            <Nav activeItem="location" />
            </div>
        </div>
    )
}

export default Location