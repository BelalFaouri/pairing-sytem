
import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import axios from 'axios'
import $ from 'jquery'
import App from './App'
import AddStudent from '../components/AddStudent'
import History from '../components/History'
import Pairing from '../components/Pairing'

class AppRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    var that = this

  }
  render () {
    return (
      <BrowserRouter>
        <Switch>

              <Route exact path='/' component={App} />
              <Route  path='/add-student' component={AddStudent} />
              <Route  path='/pairing' component={Pairing} />
              <Route  path='/history' component={History} />
              </Switch>
      </BrowserRouter>

    )
  }
}
export default AppRouter
