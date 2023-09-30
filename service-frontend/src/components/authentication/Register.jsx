
import './authentication.css'
import "../shared/shared.css";
import { AiOutlineUser, AiTwotonePhone, AiFillMail, AiTwotoneLock, AiFillInfoCircle } from 'react-icons/ai';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from './firebase';
import { useState } from 'react';
import { ref, set } from 'firebase/database';

const Register = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                let dbref = ref(database, 'users/' + user.uid)
                set(dbref, {
                    name: name,
                    phone: phone,
                    email: email
                });
                console.log(ref);
                console.log(user);

                showToastWithTitleAndMessage('Thành công', 'Đăng kí thành công', "#1D892C");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 2500);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        showToastWithTitleAndMessage('Lỗi', 'Email đã được sử dụng');
                        break;
                    case 'auth/invalid-email':
                        showToastWithTitleAndMessage('Lỗi', 'Email không hợp lệ');
                        break;
                    case 'auth/weak-password':
                        showToastWithTitleAndMessage('Lỗi', 'Mật khẩu quá yếu');
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
        setToastTitle(title);
        setToastText(message);
        setToastColor(colortoast);
        const toast = document.querySelector('.toastContainer');
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
                <p className='title'>Đăng kí</p>
                <p className='subTitle'>Điền đủ thông tin của bạn để đăng kí</p>
                <div className="inputContainer">
                    <p className='inputTitle'>Họ và tên</p>
                    <div className='iconContainer'>
                        <AiOutlineUser className='icon' />
                        <input className='input' type="text" placeholder='Huynh Ngoc Khanh Linh' onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="inputContainer">
                    <p className='inputTitle'>Số điện thoại</p>
                    <div className='iconContainer'>
                        <AiTwotonePhone className='icon' />
                        <input className='input' placeholder='0913 677 677' onChange={(e) => setPhone(e.target.value)} type="text" pattern='[0-9]{4} [0-9]{3} [0-9]{3}' />
                    </div>
                </div>
                <div className="inputContainer">
                    <p className='inputTitle'>Email</p>
                    <div className='iconContainer'>
                        <AiFillMail className='icon' />
                        <input className='input' placeholder='khanhlinh@gmail.com' onChange={(e) => setEmail(e.target.value)} type="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' />
                    </div>
                </div>
                <div className="inputContainer">
                    <p className='inputTitle'>Mật khẩu</p>
                    <div className='iconContainer'>
                        <AiTwotoneLock className='icon' />
                        <input className='input' placeholder='***********' onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>
                </div>
                <div className="inputContainer">
                    <p className='inputTitle'>Xác nhận mật khẩu</p>
                    <div className='iconContainer'>
                        <AiTwotoneLock className='icon' />
                        <input className='input' type="password" placeholder='***********' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>

                <div className="loginButtonContainer">
                    <button className='loginButton' onClick={onSubmit}>Đăng kí</button>
                </div>

                <p className='register'>Bạn đã có tài khoản? <span className='registerLink' onClick={() => window.location.href = "/login"}>Đăng nhập</span></p>

            </div>
        </div>
    )
}

export default Register