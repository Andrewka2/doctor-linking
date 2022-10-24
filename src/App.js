import React from 'react';
import './App.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';
import { Route, Routes } from "react-router-dom"
import HistoryItem from './View/HistoryItem/HistoryItem';
import DoctorRequest from './View/DoctorRequest/DoctorRequest';
import Notifications from './View/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Panel />
      <Routes>
        <Route path="/" element={<CalendarItem />} />
        <Route path="/history" element={<HistoryItem />} />
        <Route path="/doctorRequest" element={<DoctorRequest/>}/>
        <Route path="/notification" element={<Notifications/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
