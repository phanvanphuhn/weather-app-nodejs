const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1>Weather</h1>");
});

app.get("/help", (req, res) => {
  res.send({
    name: "John",
    age: 20,
  });
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is sunny",
    location: "Philadelphia",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
