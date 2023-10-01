import Nav from '../nav/Nav'
import './profile.css'
import "../shared/shared.css";
import Head from '../head/Head';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { AiFillCamera, AiOutlineExclamationCircle, AiOutlineArrowRight, AiOutlineSetting, AiFillContacts, AiOutlineLogout } from 'react-icons/ai';

import { auth } from '../authentication/firebase';
const Profile = () => {


    const logout = () => {
        auth.signOut();
        window.location.href = "/login";
    }


    return (
        <div className="container">
            <div className="childprofileContainer">
                <Head />
                <div className='profileAvatar'>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    <div className='profileCameraIconContainer'>
                        <AiFillCamera className='profileCameraIcon' />
                    </div>
                </div>
                <div className='profileName'>
                    <h1>Nguyễn Văn A</h1>
                </div>
                <div className='profileMenuButtonContainerWrapper'>
                    <div className='profileMenuButtonContainer'>
                        <AiOutlineExclamationCircle className='profileMenuButton' />
                        <span className='profileMenuButtonText'>Thông tin cá nhân</span>
                        <AiOutlineArrowRight className='profileMenuButtonRight' />
                    </div>
                </div>

                <div className='profileMenuButtonContainerWrapper'>
                    <div className='profileMenuButtonContainer'>
                        <AiOutlineSetting className='profileMenuButton' />
                        <span className='profileMenuButtonText'>Cài đặt</span>
                        <AiOutlineArrowRight className='profileMenuButtonRight' />
                    </div>
                </div>

                <div className='profileMenuButtonContainerWrapper'>
                    <div className='profileMenuButtonContainer'>
                        <AiFillContacts className='profileMenuButton' />
                        <span className='profileMenuButtonText'>Danh sách liên hệ</span>
                        <AiOutlineArrowRight className='profileMenuButtonRight' />
                    </div>
                </div>              

                <div className='profileMenuButtonContainerWrapper'>
                    <div className='profileMenuButtonContainer logout' onClick={logout}>
                        <AiOutlineLogout className='profileMenuButton' />
                        <span className='profileMenuButtonText'>Đăng xuất</span>
                        <AiOutlineArrowRight className='profileMenuButtonRight' />
                    </div>
                </div>                 


                <Nav activeItem="profile" />
            </div>
        </div>
    )
}

export default Profile