import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Steps from './Steps';
// import Spinner from '../layout/Spinner';

import { loadUser } from '../../action/auth';

const Dashboard = ({ loadUser, auth: { user, loading } }) => {
  return (
    <div>
      <h1 className='large text-primary'> Welcome</h1>
      <p className='lead'>
        <i className='fa fa-user'></i> <span>{user && user.name}</span>
      </p>
      <Steps />
    </div>
  );
};

Dashboard.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
