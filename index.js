const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.API_KEY;


let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLEwYo0c5mGnB88HBUetQT4RNsDp9yicdO&pageToken=EAAajgFQVDpDQVVpRURoQk1qTkRNRVUwUXpNek5qVTROaklvQVVpaTJORGYtcWlJQTFBQldrVWlRMmxLVVZSRlZqTlhWemgzV1hwV2RGSXlOVU5QUkdoSlVXeFdiR1JHUmxWT1JrcFBZekJTZDA5WWJIQlpNbEpRUldkM1NXODRlbWQwWjFsUk1Fa3lZbXBSU1NJ&key=${apiKey}`,
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
