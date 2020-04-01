import React from 'react';
import Navbar from './components/Navbar/Navbar'
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat/Chat'
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Chat></Chat>
    </div>
  );
}

export default App;
