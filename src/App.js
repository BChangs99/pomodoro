import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-name'>Pomodoro</div>
          <div className='App-controls'> 
            <div className='App-control-left'>
              Left
            </div>
            <div className='App-control-right'>
              Right
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
