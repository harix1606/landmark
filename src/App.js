<<<<<<< HEAD
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/css/bootstrap.css'
import CustomChatbot from './Components/chatbot/CustomChatbot'

function App() {
  return (
  <div id = "borderDemo">
    <div class = "container-fluid">
      <div class="row">
        <div class="col text-center">
          <button type="button" class="btn btn-outline-success">Webcam</button>
        </div>
        <div class="col text-center">
          <button type="button" class="btn btn-outline-success">GPS</button>
        </div>
        <div class="col text-center">
          <button type="button" class="btn btn-outline-success">Picture Upload</button>
        </div>
      </div>
    </div>
    <div class = "container-fluid">
      <CustomChatbot/>
    </div>
  </div>
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 572169acdc19422e31cc73ff51e539970a57cee4
  );
}

export default App;
