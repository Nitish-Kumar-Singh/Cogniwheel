import React, { Component } from 'react';
// import AvailableList from './AvailableList';
import ReservedList from './ReservedList';

export default class DrawGrid extends Component {
  render() {
    return (
      <div className='seat-container'>
        <table className='grid'>
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td
                  className={
                    this.props.reserved.indexOf(row) > -1
                      ? 'reserved'
                      : 'available'
                  }
                  key={row}
                  onClick={(e) => this.onClickSeat(row)}
                >
                  {row}{' '}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <ReservedList reserved={this.props.reserved} />
      </div>
    );
  }
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
