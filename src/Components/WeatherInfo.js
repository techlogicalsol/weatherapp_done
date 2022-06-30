import React from 'react';
import { NavLink } from 'react-router-dom';

const myIcon = {
    "01d": "/img/clearsky1.png",
    "01n": "/img/clearsky.png",
    "02d": "/img/fewcloud.png",
    "02n": "/img/fewcloud1.png",
    "03d": "/img/scattercloud.png",
    "03n": "/img/scattercloud1.png",
    "04d": "/img/brokencloud1.png",
    "04n": "/img/brokencloud.png",
    "09d": "img/showerrain.png",
    "09n": "img/showerrain1.png",
    "10d": "img/rain.png",
    "10n": "img/rain1.png",
    "11d": "img/thunderstorm.png",
    "11n": "img/thunderstrom1.png",
    "13d": "img/snow.png",
    "13n": "img/snow1.png",
    "50d": "img/smoke1.png",
    "50n": "/img/smoke.png",  
}


function WeatherInfo(props){

    const {weather} = props;

    const isDay = weather.weather[0].icon.includes('d');

    const getTime = (timeStamp)=>{
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }


    return(
        <>
           <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                    <div className="card">
                    <div className="card-header bg-warning">current weather</div>
                    <div className="card-body">                       
                        <div className="myImgCol">
                        <p className="card-text city_country">
                            {weather.name} | {weather.sys.country}
                        </p>
                        <img src={myIcon[weather.weather[0].icon]} className="myImg"/>
                        
                        </div>

                        <div className="temperature">
                            <div className="main_Temp">
                                {Math.floor(weather.main.temp - 273.15 )} &#8451;
                                <p>Feel Like {Math.floor(weather.main.feels_like - 273.15)} &#8451;</p>
                            </div>
                          

                            <div className="min">
                                    Min Temp: {Math.floor(weather.main.temp_min - 273.15)} &#8451;
                                <p>Max Temp: {Math.floor(weather.main.temp_max - 273.15)} &#8451;</p>
                            </div>
                            
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <span className="my_col1">
                                    <span className="icon"><i class="fas fa-info-circle"></i></span>
                                    <span>Description:</span>
                                    <span>{weather.weather[0].description}</span>
                                </span>       
                            </div>

                            <div className="col-md-6 mb-3">
                                <span className="my_col1">   
                                       <span className="icon"><i class="fas fa-meteor"></i></span>
                                       <span>Humidity</span>
                                    <span>{weather.main.humidity}%</span>
                                </span>
                            </div>

                            <div className="col-md-6 mb-3">
                                <span className="my_col1">
                                    <span className="icon"><i class="fas fa-wind"></i> </span>
                                    <span>Wind</span>
                                    <span>{Math.round(weather.wind.speed * 3.6)} km/h</span>
                                </span>
                            </div>

                            <div className="col-md-6 mb-3">
                                <span className="my_col1">
                                    <span className="icon"> 
                                        <i class="fas fa-sun"></i>
                                    </span>                                       
                                        <span> {isDay ? "Sunrise: " : "Sunset: "} </span>
                                    <span>{getTime(weather.sys[isDay ? "sunrise" : "sunset"])}</span>
                                </span>
                            </div>

                            <div className="col-md-6 mb-3">            
                                <span className="my_col1">
                                <span className="icon"><i class="far fa-eye-slash"></i></span>
                                    <span>Visibility</span>
                                    <span>{weather.visibility / 1000} Km</span>
                                </span>
                            </div>
                           
                        </div>
                        
                    </div>
                    </div>
                        
                    <NavLink className="mylink" to="/home">
                        <button className="btn btn-primary mybtn1">
                            
                        <i className="fas fa-sync-alt"></i>
                        
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WeatherInfo