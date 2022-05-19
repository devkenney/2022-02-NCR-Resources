import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [weatherData, setWeatherData] = useState({ //weatherData is our state variable and setWeatherData is a function used to change that variable
    temp: 0,
    feels_like: 0,
    weatherMain: "",
    weatherDescription: "",
    iconCode: "01d",
    placeName: "",
    windSpeed: 0,
  })

  const [formData, setFormData] = useState({
    lat: 0,
    lon: 0
  })

  const [latAndLon, setLatAndLon] = useState({
    lat: 38.88,
    lon: -77.05
  })

  useEffect(() => {
    const fetchData = async () => {
      console.log('test');
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLon.lat}&lon=${latAndLon.lon}&units=imperial&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      const weatherResponse = response.data
      setWeatherData({
        temp: weatherResponse.main.temp,
        feels_like: weatherResponse.main.feels_like,
        weatherMain: weatherResponse.weather[0].main,
        weatherDescription: weatherResponse.weather[0].description,
        iconCode: weatherResponse.weather[0].icon,
        placeName: weatherResponse.name,
        windSpeed: weatherResponse.wind.speed
      })
    }
    fetchData();
  }, [latAndLon])

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setLatAndLon(formData)
  }

  



  return (
    <div className="App">

      <h2>The temperature is: {weatherData.temp} degrees Fahrenheit</h2>
      <h3>It feels like it is {weatherData.feels_like} degrees out!</h3>
      <p>The weather is {weatherData.weatherMain}, the description is {weatherData.weatherDescription}</p>
      <img src={`http://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`} />
      <p>This weather data is from: {weatherData.placeName} and the wind speed is: {weatherData.windSpeed} miles per hour</p>

      <form onSubmit={handleSubmit}>
        <input name="lat" id="lat" onChange={handleChange} />
        <input name="lon" id="lon" onChange={handleChange} />
        <input type="submit" />
      </form>
      
    </div>
  );
}

export default App;
