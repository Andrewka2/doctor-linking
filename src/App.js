import React, { useEffect } from 'react';
import './App.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';
import { Route, Routes, Navigate, useNavigate  } from "react-router-dom";
import HistoryItem from './View/HistoryItem/HistoryItem';
import DoctorRequest from './View/DoctorRequest/DoctorRequest';
import Notifications from './View/Notification/Notification';
import RegisterPage from './View/RegisterPage/RegisterPage';
import { checkAuth, loginAction } from './root/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import UserPage from './View/UserPage/UserPage';

function App() {
  let data = useSelector(state => state.user)
  let redirect = useNavigate()
  const dispatch = useDispatch()
  useEffect (()=> {
    if(data.isLoggedIn){
      return redirect('/')
    }else{
      return redirect('/login')
    }
  },
  [data.isLoggedIn]) 
  
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        const response = await checkAuth()
        localStorage.setItem('token', response.accessToken)
        dispatch(loginAction(response.user))
        redirect('/')
      }
    }
    fetchData()
  }, [])

  return (

    <div className="App">
      {
        data.isLoggedIn ? <Panel /> : null
      }
      <Routes>
        <Route path="/doctorRequest" element={<DoctorRequest />} />
        <Route path="/user" element={<UserPage/>} />
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
