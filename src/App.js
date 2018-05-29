import React, { Component } from 'react';
import './App.css';
import BasicExample from './components/Toolbar/Toolbar';
import PowerSettings from './components/PowerSettings/PowerSettings';


class App extends Component {
  state={
    otherState: 'some other value',
    showPersons: false
  }

  render() {
   
    return (
      <div className="App">
        <div className= "container">
          <div className="jumbotron">
            <h1>
              Digital Signage Management 
            </h1> 
            <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
          </div>
        </div>

        <BasicExample/>
        <PowerSettings/>

      </div>

    );
  }
}

export default App;
