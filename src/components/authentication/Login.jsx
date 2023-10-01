
import './authentication.css'
import "../shared/shared.css";
import { AiFillMail, AiFillLock, AiFillApple, AiFillInfoCircle } from 'react-icons/ai';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                showToastWithTitleAndMessage('Thành công', 'Đăng nhập thành công', "#1D892C");
                setTimeout(() => {
                    window.location.href = "/sos";
                }, 2500);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                switch (errorCode) {
                    case 'auth/invalid-email':
                        showToastWithTitleAndMessage('Lỗi', 'Email không hợp lệ');
                        break;
                    case 'auth/user-disabled':
                        showToastWithTitleAndMessage('Lỗi', 'Tài khoản đã bị khóa');
                        break;
                    case 'auth/user-not-found':
                        showToastWithTitleAndMessage('Lỗi', 'Tài khoản không tồn tại');
                        break;
                    case 'auth/wrong-password':
                        showToastWithTitleAndMessage('Lỗi', 'Sai mật khẩu');
                        break;
                    case 'auth/invalid-login-credentials':
                        showToastWithTitleAndMessage('Lỗi', 'Sai thông tin đăng nhập');
                        break;
                    default:
                        showToastWithTitleAndMessage('Lỗi', 'Đã xảy ra lỗi ' + errorMessage);
                        break;
                }
            });

    }

    const [toastTitle, setToastTitle] = useState('Default Title');
    const [toastText, setToastText] = useState('Default Text');
    const [toastColor, setToastColor] = useState('red');

    const showToastWithTitleAndMessage = (title, message, colortoast) => {
        const toast = document.querySelector('.toastContainer');
        toast.classList.remove('show');
        setToastTitle(title);
        setToastText(message);
        if (colortoast == null) {
            colortoast = '#C72020';
        }
        setToastColor(colortoast);
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }
            , 2500);
    }
    return (
        <div className="container">
            <div className="childLoginContainer">
                <div className="toastContainer" style={{ backgroundColor: toastColor }}>
                    <AiFillInfoCircle className='toastIcon' />
                    <div className="toast">
                        <p className='toastTitle'>{toastTitle}</p>
                        <p className='toastText'>{toastText}</p>
                    </div>
                </div>
                <div className="emptyContainer"></div>
                <p className='title'>Chào mừng trở lại</p>
                <p className='subTitle'>Nhập thông tin để đăng nhập</p>
                <div className="inputContainer">
                    <p className='inputTitle'>Email</p>
                    <div className='iconContainer'>
                        <AiFillMail className='icon' />
                        <input className='input' type="text" placeholder='Nhập email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="inputContainer">
                    <p className='inputTitle'>Mật khẩu</p>
                    <div className='iconContainer'>
                        <AiFillLock className='icon' />
                        <input className='input' type="password" placeholder='Nhập mật khẩu' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="forgotPasswordContainer">
                    <p className='forgotPassword'>Quên mật khẩu?</p>
                </div>
                <div className="loginButtonContainer">

                    <button className='loginButton' onClick={onLogin}>Đăng nhập</button>
                </div>
                <div className="orContainer">
                    <div className="orLineC">
                        <div className="orLine"></div>
                    </div>
                    <p className='or'>Hoặc</p>
                    <div className="orLineC">
                        <div className="orLine"></div>
                    </div>
                </div>
                <div className="loginButtonContainer">

                    <button className='button'><FcGoogle className='icon' />Đăng nhập với Google</button>
                </div>
                <div className="loginButtonContainer">
                    <button className='button'><AiFillApple className='icon' />Đăng nhập với Apple</button>
                </div>

                <p className='register'>Bạn chưa có tài khoản? <span className='registerLink' onClick={() => window.location.href = "/register"}>Đăng ký</span></p>

            </div>
        </div>
    )
}

export default Login