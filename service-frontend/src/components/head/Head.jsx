import "./head.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import { ref, get, push } from 'firebase/database';
import { auth, database } from '../authentication/firebase'
import { useEffect } from 'react';
const Head = () => {
    const [name, setName] = React.useState('Anonymous');
    useEffect(() => {
        console.log("Getting name");
        let uid = auth.currentUser.uid;
        let userdata = ref(database, 'users/' + uid);
        get(userdata).then((snapshot) => {
            setName(snapshot.val().name);
        })
    }, [])
    return (
        <div className="navbar">
            <div className="navleft">Chào <span className="name">{name}</span></div>
            <div className="navright">
                <NotificationsIcon />
            </div>
        </div>
    )
}

export default Head