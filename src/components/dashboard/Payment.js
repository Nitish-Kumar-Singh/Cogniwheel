import React, { useState } from 'react';
import visa from '../../img/visa.jpg';
import mastercard from '../../img/mastercard.jpg';
import amex from '../../img/amex.jpg';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Payment = (props) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className='payment-column ' style={{ textAlign: 'center' }}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <div className='creditCardForm'>
        <div className='heading'>
          <h1>CheckOut</h1>
        </div>
        <div className='payment'>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group owner'>
              <label htmlFor='owner'>Owner</label>
              <input
                type='text'
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className='form-control'
                id='owner'
              />
            </div>
            <div className='form-group CVV'>
              <label htmlFor='cvv'>CVV</label>
              <input
                type='tel'
                value={cvc}
                name='cvc'
                placeholder='CVC'
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className='form-control cvv'
                id='cvv'
              />
            </div>
            <div className='form-group' id='card-number-field'>
              <label htmlFor='cardNumber'>Card Number</label>
              <input
                type='tel'
                value={number}
                name='number'
                onChange={(e) => setNumber(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className='form-control'
                id='cardNumber'
              />
            </div>
            <div className='form-group' id='expiration-date'>
              <label>Expiration Date</label>
              <input
                type='text'
                value={expiry}
                name='expiry'
                placeholder='MM/YY Expiry'
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
                className='form-control'
                id='cardNumber'
              />
            </div>
            <div className='form-group' id='credit_cards'>
              <img id='visa' src={visa} alt='visa' />
              <img id='visa' src={mastercard} alt='master' />
              <img id='visa' src={amex} alt='amex' />
            </div>
            <div style={{ marginLeft: '23px' }}>
              <button onClick={props.previousStep} className='btn btn-light'>
                Prev
              </button>
              <button
                type='submit'
                onClick={props.nextStep}
                className='btn btn-primary'
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
