import React, { useState } from 'react';
import * as busApi from '../../api/bus';

const Search = (props) => {
  const [travelPlan, setTravelPlan] = useState({});
  const [travelPlandata, setTravelPlandata] = useState([]);
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    busApi
      .doSearch(travelPlan)
      .then((response) => response.data)
      .then((searchResult) => {
        setTravelPlandata(searchResult);
      });
  };
  const handleChangeEvent = (e, field) => {
    const fieldValue = e.target.value;
    setTravelPlan({ ...travelPlan, [field]: fieldValue });
  };
  const displayNoBusAvailable = () => {
    return (
      <div className='hide-sm'>
        <h1 style={{textAlign:'center'}}>No Bus Available Choose Another destination</h1>
      </div>
    );
  };
  const displaydata = () => {
    return travelPlandata.map((data, idx) => {
      // if (data.length === 0) {
      //   return <div>No Bus</div>;
      // } else {
      return (
        <tr key={idx}>
          <td>{data.busType}</td>
          <td>{data.from}</td>
          <td>{data.to}</td>
          <td>{travelPlan.date}</td>
          <td style={{ textAlign: 'center' }}>{data.seat}</td>
          <td>{data.fare}</td>
          <td>
            <button onClick={props.nextStep} className='btn btn-primary'>
              Book Now
            </button>
          </td>
        </tr>
      );
      // }
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmitEvent(e)}>
        <div className='form-box '>
          <h3
            className='text-center'
            style={{ color: 'aliceblue', paddingTop: '10px' }}
          >
            Search Here
          </h3>
          <datalist id='cities'>
            <option>BANGALORE</option>
            <option>CHENNAI</option>
            <option>HYDRABAD</option>
          </datalist>
          <input
            style={{ margin: '20px' }}
            type='text'
            list='cities'
            onChange={(e) => handleChangeEvent(e, 'from')}
            className='search-field location'
            placeholder='From'
            required
          />

          <input
            style={{ margin: '20px' }}
            type='text'
            list='cities'
            onChange={(e) => handleChangeEvent(e, 'to')}
            className='search-field location'
            placeholder='To'
            required
          />
          <input
            style={{ margin: '20px' }}
            type='date'
            onChange={(e) => handleChangeEvent(e, 'date')}
            className='search-field location'
            required
          />

          <button style={{ margin: '20px' }} className='btn btn-primary'>
            search
          </button>
        </div>
      </form>

      <div>
        <table>
          <tr>
            <th>Bus Type</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Date</th>
            <th>Seat Available</th>
            <th>Fare</th>
            <th>Proceed</th>
          </tr>

          {displaydata()}
        </table>
        {travelPlandata.length === 0 ? displayNoBusAvailable() : ''}
      </div>
    </div>
  );
};

export default Search;
