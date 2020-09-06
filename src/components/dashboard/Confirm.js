import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadUser } from '../../action/auth';
const Confirm = ({ loadUser, auth: { user } }) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className='passenger-detail row'>
        <div className='passenger-detail-head column'>
          <h2 className='pass-head'>Passenger Details</h2>

          <div className='pass-row row'>
            <div className='pass-left column'>
              <h5>Name</h5>
              <h5>Mobile No.</h5>
              <h5>Email</h5>
              <h5>DOB</h5>

              <h5>Gender</h5>
              <br />
              <h5>Pass 1 Name</h5>
              <h5>Seat No</h5>
              <h5>Pass 1 Age</h5>
              <h5>Pass 1 gender</h5>
              <br />
              <h5>Pass 2 Name</h5>
              <h5>Seat No</h5>
              <h5>Pass 2 Age</h5>
              <h5>Pass 2 gender</h5>
            </div>
            <div className='pass-right column'>
              <h5>{user && user.name}</h5>
              <h5>{user && user.phone}</h5>
              <h5>{user && user.email}</h5>
              <h5>{user && user.dob}</h5>

              <h5>{user && user.gender}</h5>
              <br />
              <h5>Millind</h5>
              <h5> 4</h5>
              <h5>22</h5>
              <h5>Male</h5>
              <br />
              <h5>Harsh</h5>
              <h5> 6</h5>
              <h5>23</h5>
              <h5>Male</h5>
            </div>
          </div>
        </div>
        <div className='book-head column'>
          <h1>Booking Summary</h1>

          <div className='book-row row'>
            <div className='book-left column'>
              <h5>BusType</h5>
              <h5>From</h5>
              <h5>To</h5>
              <h5>Date</h5>

              <h5>Total Seat</h5>
              <h5>fare</h5>
              <h5>Service Tax</h5>
              <br />
              <br />
              <br />
              <h5>........................................</h5>
              <h5>Total Charges</h5>
            </div>
            <div className='book-right column'>
              <h5>TROLLEY DECK</h5>
              <h5>Chennai</h5>
              <h5>Bangalore</h5>
              <h5>25-04-2020</h5>

              <h5>2</h5>
              <h5>3000</h5>
              <h5>60</h5>
              <br />
              <br />
              <br />
              <h5>......................</h5>
              <h5>3060</h5>
              <br />

              <Link to='/' className='btn btn-primary'>
                Go to HomePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Confirm.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Confirm);
