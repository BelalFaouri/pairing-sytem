import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div className="App">
      <button><Link to='/add-student'>Add Student</Link></button>
      <button><Link to='/pairing'>Pairing</Link></button>
      <button><Link to='/History'>History</Link></button>

      </div>
    );
  }
}

export default App;
