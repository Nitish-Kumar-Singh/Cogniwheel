import React, { Component } from 'react';

export default class ReservedList extends Component {
  render() {
    return (
      <div className='row'>
        <h4 style={{ marginTop: '20px' }}>
          Reserved Seats: ({this.props.reserved.length})
        </h4>
        <ul>
          {this.props.reserved.map((res) => (
            <div className='pass column'>
              <li key={res}>Seat : {res}</li>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Age' />
              <br />
              <input name='gender' type='checkbox' value='Male' />
              <label style={{ margin: '10px' }}>Male</label>
              <input name='gender' type='checkbox' value='Female' />
              <label style={{ margin: '10px' }}>Female</label>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
