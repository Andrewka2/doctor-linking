import React from 'react';
import ChooseFile from './Components/ChooseFileComponent/ChooseFile';
import './App.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';
import { Route, Routes } from "react-router-dom";
import DoctorRequest from './View/DoctorRequest/DoctorRequest';
import Notifications from './View/Notification/Notification';

function App() {
  return (
    <div className="App">
      <Panel />
      <Routes>
        <Route path="/" element={<CalendarItem />} />
          <Route path="/doctorRequest" element={<DoctorRequest/>}/>
          <Route path="/notification" element={<Notifications/>}/>
          <Route/>
      </Routes>
    </div>
  );

}

export default App;
