const request = require("request");

const geoAddress = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2bb0281e58441d191ca29806606452ef&query=${address}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather server", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.location.lat,
        longitude: response.body.location.lon,
      });
    }
  });
};

module.exports = geoAddress;
