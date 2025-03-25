const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2bb0281e58441d191ca29806606452ef&query=${latitude},${longitude}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather server", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          response.body.current.temperature +
          " degrees out. There is a " +
          response.body.current.feelslike +
          " degree feelslike."
      );
    }
  });
};

module.exports = forecast;
