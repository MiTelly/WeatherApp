import React, { Component } from 'react';
import './App.css';
import ReactForm from './ReactForm.js'
import Sun from './Sun.js'

class App extends Component {

  render() {
    let styles = {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
    return (
      <div style={styles}>
          <ReactForm />
          <Sun />
      </div>
    );
  }
}

export default App;
