import React, { Component } from 'react';


class Table extends Component {
  render() {
    return (
      <div style={{marginBottom:'50px'}}>
      <table>
  <tr>
    <th>Student-1</th>
    <th>Student-2</th>
  </tr>
  {this.props.item.map((pair)=> <tr>
    <td>{pair[0].name}</td>
    <td>{pair[1].name}</td>
  </tr>)}
</table>

      </div>
    );
  }
}

export default Table;
