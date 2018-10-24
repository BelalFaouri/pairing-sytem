import React, { Component } from 'react';
import Table from './Table'
import $ from 'jquery'

class History extends Component {
  constructor(props){
    super(props)
    this.state={
      tables:[]
    }

  }
  componentWillMount(){

    var that = this
    $.ajax({
      url: '/history-tables',
      type: 'GET',
      success: (data) => {
        that.setState({tables:data})
        console.log(data)
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }
  render() {
    console.log(this.state);
    return (
      <div className='history'>

        <p>History;</p>
          {this.state.tables.map((item)=><Table item={item.table} />)}
      </div>
    );
  }
}

export default History;
