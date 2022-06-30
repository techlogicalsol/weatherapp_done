import React, {useState} from 'react'
import City from './City'
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

function Home(){

    const API_KEY = "598f7275273fdc2ce7ecc1cdc5445d3a"
    const [city, updatedCity] = useState();
    const [country, updatedCountry] = useState();
    const [weather, updatedWeather] = useState();

  const fetchWeather = async (e) =>{
    e.preventDefault()
    const response = 
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=
    ${city}, ${country}&appid=${API_KEY}`)
    
     console.log(response)

    
    updatedWeather(response.data)

  }

    return(
        <>
        
            {weather ? (
        <WeatherInfo 
          weather={weather}
          
        /> 
     ) : (
      <City 
        updatedCity={updatedCity} 
        updatedCountry={updatedCountry }
        fetchWeather={fetchWeather}

      />
     )}

        </>
    )
}

export default Home