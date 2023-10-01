import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Education from './components/edu/Education';
import Sos from './components/sos/Sos';
import Sender from './components/sos/Sender';
import Profile from './components/profile/Profile';
import Onboard from './components/onboard/Onboard';
import { auth } from './components/authentication/firebase';
import SosForm from './components/sos/SosForm';
import SosConfirm from './components/sos/SosConfirm';
import SafeGuide from './components/sos/SafeGuide';
import Rescue from './components/rescue/Rescue';
import Detail from './components/rescue/Detail';
import SafeConfirm from './components/sos/SafeConfirm';
import Location from './components/sos/Location';
import Homepage from './components/quizz/Homepage';
import General from './components/quizz/General';
import FirstAid from './components/rescue/FirstAid';
import QuizzDetail from './components/quizz/QuizzDetail';
import Simulation0 from './components/quizz/Simulation0';
import Simulation1 from './components/quizz/Simulation1';
import Simulation2 from './components/quizz/Simulation2';
import Simulation3 from './components/quizz/Simulation3';
import Simulation4 from './components/quizz/Simulation4';
function App() {


  // Check what page user is in
  let path = window.location.pathname;
  let pagetype = "";
  if (path === "/login" || path === "/register" || path === "/onboard" || path === "/") {
    pagetype = "auth";
  } else {
    pagetype = "app";
  }

  auth.onAuthStateChanged((user) => {
    console.log("pagetype: " + pagetype + " " + auth.currentUser);
    if (auth.currentUser && pagetype === "auth") {
      console.log("User is signed in, go to app");
      window.location.href = "/sos";
    } else if (!auth.currentUser && pagetype === "app") {
      console.log("No user is signed in, go to login page");
      window.location.href = "/onboard";
    }
  });




  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/sos" element={<Sos/>} />
        <Route path="/sender" element={<Sender/>} />
        <Route path="/form" element={<SosForm/>}/>
        <Route path="/confirm" element={<SosConfirm/>}/>
        <Route path="/safe-guide" element={<SafeGuide/>} />
        <Route path = 'safe-confirm'  element={<SafeConfirm/>}/>
        {/* <Route path="/education" element={<Education/>} /> */}
        <Route path="/profile" element={<Profile/>} />
        <Route path="/rescue" element={<Rescue/>} />
        <Route path='/rescue/:id' element={<Detail/>} />
        <Route path='first-aid' element={<FirstAid/>}/> 
        <Route path="/onboard" element={<Onboard/>} />
        <Route path='/location' element={<Location/>}/>
        <Route path='/quizz' element={<Homepage/>}/>
        <Route path='/education' element={<Homepage/>}/>
        <Route path='/general' element={<General/>}/>
        <Route path = '/quizz-detail' element ={<QuizzDetail/>}/>
        <Route path='/simulation' element={<Simulation0 />} />
        <Route path='/simulation2' element={<Simulation2 />} />
        <Route path='/simulation3' element={<Simulation3 />} />
        <Route path='/simulation4' element={<Simulation4 />} />
        <Route path= '/simulation-detail' element={<Simulation1/>}/>
        <Route path="/" element={<Navigate to="/onboard"/>} />
      </Routes>
    </div>
  );
}

export default App;
