const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

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
  res.send({
    forecast: "It is sunny",
    location: "Philadelphia",
    footerText: "This is a footer",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
