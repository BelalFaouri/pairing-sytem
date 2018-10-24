import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddStudent from './AddStudent';
import Pairing from './Pairing';
import History from './History';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render((

  <BrowserRouter>
  <Switch>

            <Route exact path='/' component={App} />
            <Route  path='/add-student' component={AddStudent} />
            <Route  path='/pairing' component={Pairing} />
            <Route  path='/history' component={History} />
            </Switch>

  </BrowserRouter>
), document.getElementById('root'))
