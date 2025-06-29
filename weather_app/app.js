require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = process.env.API_KEY;
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.post("/", async (req, res) => {
  const city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);

    if (weatherData.cod !== 200) {
      res.render("index", { weather: null, error: "City not found" });
    } else {
      const weatherText = `It's ${weatherData.main.temp}°C in ${weatherData.name}.`;
      res.render("index", { weather: weatherText, error: null });
    }
  } catch (error) {
    console.error("Error:", error);
    res.render("index", { weather: null, error: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
