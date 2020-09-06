import React from 'react';
import StepWizard from 'react-step-wizard';
import Search from './Search';
import SelectSeat from './SelectSeat';
import Payment from './Payment';
import Confirm from './Confirm';
import Nav from './Nav';
const Steps = () => {
  return (
    <StepWizard nav={<Nav />}>
      <Search />
      <SelectSeat />
      <Payment />
      <Confirm />
    </StepWizard>
  );
};

export default Steps;
