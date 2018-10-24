import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import StudentRow from './StudentRow'

class AddStudent extends Component {
  constructor(props){
    super(props)
    this.state={
      students:[]
    }
    this.onChange = this.onChange.bind(this)
    this.addStudent=this.addStudent.bind(this)
  }
  componentWillMount(){
    const that = this;
    $.ajax({
      url: '/students',
      type: 'GET',
      success: (data) => {
        console.log(data);
        that.setState({students:data})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  }
  addStudent () {
    var that = this
    $.ajax({
      url: '/add-student',
      type: 'POST',
      data:that.state,
      success: (data) => {
        console.log('student added')
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }


  render() {

    console.log('state',this.state);
    return (
      <div className="container-fluid add-student">
      <form>
        <input placeholder="First name" type="text" name="name" onChange={this.onChange}></input>
        <input placeholder="Level (1-5)" type="text" name="level" onChange={this.onChange}></input>
        <button className='add-button' onClick={this.addStudent}>Add</button>
      </form>
      <div className='student-table' style={{textAlign:'left'}}>
        <p style={{display:'inline'}}>Name</p><p style={{display:'inline'}}>Level</p>
        {this.state.students.map((student) => <StudentRow key = {student._id} student={student} />)}
      </div>

      </div>
    );
  }
}

export default AddStudent;
