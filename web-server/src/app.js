const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geoAddress = require("./utils/geoAddress");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Weather page",
    footerText: "This is a footer",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    aboutText: "This is about page",
    title: "About",
    name: "About page",
    footerText: "This is a footer",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is a help message",
    title: "Help",
    name: "Help page",
    footerText: "This is a footer",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }

  geoAddress(req.query.address, (error, { latitude, longitude } = {}) => {
    if (error) {
      return res.send({
        error: error,
      });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  res.send({
    forecast: "It is sunny",
    location: "Philadelphia",
    address: req.query.address,
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found.",
    title: "404",
    name: "404 page",
    footerText: "This is a footer",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
