const request = require("request");
const geoAddress = require("./utils/geoAddress");
const forecast = require("./utils/forecast");

geoAddress("New York", (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log(data);
  });
});
