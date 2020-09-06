import axios from 'axios';

export function doReserve(seats) {
  let apiUrl = 'http://localhost:5000/seats/reserve';
  return axios.post(apiUrl, seats, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
