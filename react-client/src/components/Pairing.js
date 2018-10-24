import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import $ from 'jquery'
class Pairing extends Component {
  constructor(props){
    super(props)
    this.state={
      students:[],
      pairs:[]
    }
    this.makePairs=this.makePairs.bind(this)
    this.savePairs=this.savePairs.bind(this)
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

  makePairs(){
    const that = this;
    $.ajax({
      url: '/pairs',
      type: 'POST',
      data:that.state,
      success: (data) => {
        that.setState({pairs:data})
        console.log(data);
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }
  savePairs(){
    const that = this;

    $.ajax({
      url: '/pairing',
      type: 'POST',
      data:that.state,
      success: (data) => {
        console.log('sent save');
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }
  render() {

    return (
      <div className='pairing'>
        <div className='pairing-button'>
          <button onClick={this.makePairs}>Pairing</button>
          <button onClick={this.savePairs}>Save</button>
        </div>
          <div className='container-flex'>
            <div className='col-container'>
              <p>Student-1</p>
                {this.state.pairs.map((pair)=> <p>{pair[0].name}</p>)}
            </div>
            <div className='col-container'>
              <p>Student-2</p>
                {this.state.pairs.map((pair)=> <p>{pair[1].name}</p>)}

            </div>
          </div>
      </div>
    );
  }
}

export default Pairing;
