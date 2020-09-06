import React from 'react';

const Nav = (props) => {
  return (
    <div>
      <h2>
        Step {props.currentStep}/{props.totalSteps}
      </h2>
    </div>
  );
};

export default Nav;
