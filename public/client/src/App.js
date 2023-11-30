import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";

//Pages
import Home from './Pages/Home'

//Components
import SideBar from './Components/SideBar'
import Header from './Components/Header'

function App() {
  return (
  <Router>
    <div className="App">
      <header id="header">
        <Header/>
      </header>
      <div id='main'>
      <div id='sideBar'>
        <SideBar/>
      </div>
      <div id='content'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      </div>
      </div>
    </div>
    </Router>
  );

}

export default App;
