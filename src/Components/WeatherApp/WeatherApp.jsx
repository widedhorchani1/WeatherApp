import React, { useState } from 'react'
import './WeatherApp.css'


import search_icon from '../Assets/search.png.png'
import clear_icon from '../Assets/clear.png.png'
import cloud_icon from '../Assets/cloud.png.png'
import drizzle_icon from '../Assets/drizzle.png.png'
import rain_icon from '../Assets/rain.png.png'
import humidity_icon from '../Assets/humidity.png.png'
import snow_icon from '../Assets/snow.png.png'
import wind_icon from '../Assets/wind.png.png'
const WeatherApp = () => {
    let api_key="1dd334a084f832f22d251047e5b8e914";
    const [wicon,setWicon] = useState(cloud_icon)
    const search= async()=>{
        const element=document.getElementsByClassName("cutyInput")
        if (element[0].value==""){
            return 0
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        
        let response= await fetch(url)
        let data = await response.json()
        const humidity=document.getElementsByClassName("hymidityPercent")
        const wind=document.getElementsByClassName("windRate")
        const temperature=document.getElementsByClassName("weatherTem")
        const location=document.getElementsByClassName("weatherLocation")
        
        humidity[0].innerHTML= data.main.humidity +" %"
        wind[0].innerHTML = Math.floor(data.wind.speed)+" Km/H"
        temperature[0].innerHTML =Math.floor(data.main.temp )+ " °c"
        location[0].innerHTML = data.name
        
        if (data.weather[0].icon==="01d" ||data.weather[0].icon=== "01n" ){
            setWicon(clear_icon)
        }
        else if (data.weather[0].icon==="02d" ||data.weather[0].icon=== "02n" )
       { setWicon(cloud_icon)}
       else if (data.weather[0].icon==="03d" ||data.weather[0].icon=== "03n" )
       { setWicon(drizzle_icon)}
       else if (data.weather[0].icon==="04d" ||data.weather[0].icon=== "04n" )
       { setWicon(drizzle_icon)}
       else if (data.weather[0].icon==="09d" ||data.weather[0].icon=== "09n" )
       { setWicon(rain_icon)}
       else if (data.weather[0].icon==="10d" ||data.weather[0].icon=== "10n" )
       { setWicon(rain_icon)}
       else if (data.weather[0].icon==="13d" ||data.weather[0].icon=== "13n" )
       { setWicon(snow_icon)}
       else 
       { setWicon(clear_icon)}
    }
  return (
    <div className='container'>
            <div className='topBar'>
            <input type="text" className='cutyInput' placeholder='Search' />
            <div className='searchIcon' onClick={()=>{search()}}>
                <img src={search_icon} width="70px" height="70px"/>
            </div>
            </div>
            <div className='weatherImage'>
                <img src={wicon} />
            </div>
            <div className='weatherDescription'>
            <div className='weatherTem'> 21 °c</div>
            <div className='weatherLocation'>Tunisia</div>
            </div>
            <div className="dataContainer">
                <div className='element'>
                    <img src={humidity_icon} alt=""  className='icon'/>
                    <div className="data">
                        <div className="hymidityPercent"> </div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt=""  className='icon'/>
                    <div className="data">
                        <div className="windRate"></div>
                        <div className="text">Wind speed</div>
                    </div>
                </div>
            </div>


        

    </div>
  )
}

export default WeatherApp