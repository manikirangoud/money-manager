import './App.css';
import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import HistoryDashBoard from './components/HistoryDashBoard';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div className='App'>

      <Header/>

      <Routes>
          <Route exact path='/history' element={<HistoryDashBoard/>} />
          <Route exact path='*' element={<Dashboard/>} />
      </Routes>    

      <div className='footer' style={{minHeight: '10vh'}}></div>
    </div>
  );
}

export default App;
