import React, { useEffect, useState } from 'react';
import './App.css';
import notificationSound from '../src/assets/registrationImages/notification.wav'
import 'react-notifications/lib/notifications.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import HistoryItem from './View/HistoryItem/HistoryItem';
import DoctorRequest from './View/DoctorRequest/DoctorRequest';
import Notifications from './View/Notification/Notification';
import RegisterPage from './View/RegisterPage/RegisterPage';
import { checkAuth, loginAction } from './root/actions/userActions';
import { thunkGetAllUsers } from './root/actions/allUsersAction';
import { useDispatch, useSelector } from 'react-redux';
import UserPage from './View/UserPage/UserPage';
import UsersManagmant from './View/UsersManagment/UsersManagement';
import { getVerifyToken, onMessageListener } from './firebase';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function App() {
  const [show, setShow ] = useState(false)
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  let sound = new Audio(notificationSound)
  function play(){
    sound.play()
  }
  let data = useSelector(state => state.user)
  let redirect = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (data.isLoggedIn) {
      return redirect('/')
    } else {
      return redirect('/login')
    }
  }, [data.isLoggedIn])

  onMessageListener().then(payload => {
    setShow(true);
    NotificationManager.error(payload.notification.body, payload.notification.title, 5000, () => {
      alert('callback');
    });
    setNotification({title: payload.notification.title, body: payload.notification.body})
    
  }).catch(err => console.log('failed: ', err));

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        const response = await checkAuth()
        localStorage.setItem('token', response.accessToken)
        dispatch(loginAction(response.user))
        redirect('/')
        await dispatch(thunkGetAllUsers())
      }
    }
    getVerifyToken(setTokenFound);
    fetchData()
  }, [])

  return (
    <div className="App">
      {
        data.isLoggedIn ? <Panel /> : null
      }
      {
        show ? play() : null
      }
      <div className="notificationContainer">
        <NotificationContainer/>
      </div>
      <Routes>
        <Route path="/doctorRequest" element={<DoctorRequest />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user-management" element={<UsersManagmant />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/" element={<RequireAuth
          redirectTo={'/login'}
        ><CalendarItem /> </RequireAuth>} />
        <Route path="/history" route={'/history'} element={
          <RequireAuth redirectTo={'/login'}>
            <HistoryItem />
          </RequireAuth>
        } />
        <Route path="/protected"
          element={
            <RequireAuth redirectTo="/login">
              <RegisterPage />
            </RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;

function RequireAuth({ children, redirectTo }) {
  let data = useSelector(state => state.user)
  return (
    data.isLoggedIn ? children : <Navigate to={redirectTo} />
  )
}
