import React from 'react';
import Seat from './seat/App';

const SelectSeat = (props) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className='row' style={{ color: '#555' }}>
        <div className='column' style={{ textAlign: 'center' }}>
          <Seat />
        </div>
        <div className='seat-booking-summary column'>
          <h1>Booking Summary</h1>
          <div className='row'>
            <div className='column'>
              <h5>BusType</h5>
              <h5>From</h5>
              <h5>To</h5>
              <h5>Date</h5>

              <h5>fare</h5>
              <h5>Service Tax</h5>
              <br />
              <br />
              <br />
              <h5>................</h5>
              <h5>Total Charges</h5>
            </div>
            <div className='column'>
              <h5>TROLLEY DECK</h5>
              <h5>Chennai</h5>
              <h5>Bangalore</h5>
              <h5>25-06-20</h5>
              <h5>1500</h5>
              <h5>60</h5>
              <br />
              <br />
              <br />

              <h5>................</h5>
              <h5>1560 /- Each</h5>
              <br />
              <div className='booking-summary-btn'>
                <button onClick={props.previousStep} className='btn btn-light'>
                  Prev
                </button>
                <button onClick={props.nextStep} className='btn btn-primary'>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSeat;
