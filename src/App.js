import React, { Component } from 'react';
import './App.css';
import DisplayContainer from './components/DisplayContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="displaycontainer">
          <DisplayContainer />
        </div>
      </div>
    );
  }
}

export default App;
