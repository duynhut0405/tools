import axios from 'axios';

const request = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});


const getAddressServices = (lat, long) => {
  return request({
    url: '/geocode/json',
    params: {
      latlng: `${lat},${long}`,
      key: 'AIzaSyBINeM-Nw7y1jO6cmYVJvKHB-Xze5Bsa8c'
    }
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export { getAddressServices };
