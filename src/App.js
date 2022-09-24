import React from 'react';
import './App.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';
import { Route, Routes } from "react-router-dom"
import HistoryItem from './View/HistoryItem/HistoryItem';

function App() {

  return (
    <div className="App">
      <Panel />
      <Routes>
        <Route path="/" element={<CalendarItem />} />
        <Route path="/history" element={<HistoryItem />} />
      </Routes>

    </div>
  );

}

export default App;
