import axios from 'axios';

const API = () => {
    const axios = require('axios');
    axios.get('http://api.open-notify.org/iss-now.json')
    .then(response => {
        const { latitude, longitude } = response.data.iss_position;
        console.log(`The ISS is currently at (${latitude}, ${longitude}).`);
    })
    .catch(error => {
        console.log(error);
    });
}