import axios from 'axios';

export function doSearch({ from, to, travelDate }) {
  let apiUrl = `http://localhost:5000/api/bus/search?q=${from}-${to}`;
  return axios.get(apiUrl);
}
