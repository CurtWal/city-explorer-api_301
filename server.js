"use strict";

require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3003;
const getMovie = require("./router/movies")
const app = express();
// const weatherData = require("./data/weather.json");
const getWeather = require("./router/weather")



const cors = require("cors");
const axios = require("axios");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

// ----------------------------------------------------------------
//  Lab 07
// app.get("/weather", (req, res) => {
//   let cityName = req.query.cityName;

//   const city = weatherData.find(
//     (city) =>
//       city.city_name.toLocaleLowerCase() === cityName.toLocaleLowerCase()
//   );
//   console.log(city);
//   try {
//     const weatherArray = city.data.map((day) => new Forecast(day));
//     res.status(200).send(weatherArray);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// class Forecast {
//   constructor(day) {
//     this.date = day.valid_date;
//     this.description = day.weather.description;
//   }
// }
//  ----------------------------------------------------------------

// Lab 08
// const handleWeather = async (req, res) => {
//   let { lat, lon } = req.query;
//   try {
//     let API = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&include=minutely`;
//     let response = await axios.get(API);
//     const weatherArray = response.data.data.map((day) => new Forecast(day));
//     res.status(200).send(weatherArray);
//     console.log(weatherArray);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// class Forecast {
//   constructor(day) {
//     this.date = day.ob_time;
//     this.description = day.weather.description;
//   }
// }
// app.get("/weather", handleWeather);

// const handleMovies = async (request, response) => {
//   try {
//     const { city } = request.query;
//     const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=${city}&page=1`;
//     const chosenCity_Movie = await axios.get(API);
//     const results = pushMovies(chosenCity_Movie.data);
//     response.send(results);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
// app.get("/movie", handleMovies);
// ---------------------------------------------------------------------------------------------------

//  Lab 09
app.use("/weather", getWeather);
app.use("/movie", getMovie);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
