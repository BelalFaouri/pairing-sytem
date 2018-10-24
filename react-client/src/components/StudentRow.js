import React, { Component } from 'react';
import $ from 'jquery'

class StudentRow extends React.Component {
  constructor(props){
    super(props)
    }

  render(){

  return (
    <div >
      <p style={{display:'inline-block'}}>{this.props.student.name}</p>
      <p style={{display:'inline-block'}}>{this.props.student.level}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>

  )
}
}
export default StudentRow;
