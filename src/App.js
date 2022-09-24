import React from 'react';
import ChooseFile from './Components/ChooseFileComponent/ChooseFile';
import './App.css';
import Panel from './Components/Panel/Panel';
import CalendarItem from './View/CalendarItem/CalendarItem';

function App() {

  return (
    <div className="App">
      <Panel />

      <CalendarItem />

    </div>
  );

}

export default App;
