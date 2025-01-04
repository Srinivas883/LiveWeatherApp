import { useEffect, useState } from "react"
import axios from "axios"

function Weatherapp() {

    const [city, setcity] = useState("New Delhi")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")
    const [weatherimg, setweatherimg] = useState()

    const weatherimgcode = {
        Thunderstorm: "11d",
        Drizzle: "09d",
        Rain: "10d",
        Snow: "13d",
        Mist: "50d",
        Smoke: "50d",
        Haze: "50d",
        Dust: "50d",
        Fog: "50d",
        Sand: "50d",
        Ash: "50d",
        Squall: "50d",
        Tornado: "50d",
        Clear: "01d",
        "few clouds": "02d",
        "scattered clouds": "03d",
        "broken clouds": "04d",
        "overcast clouds": "04d"
    }

useEffect(()=>{

    var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=New Delhi&appid=aa3b687b8bbb078d3975636723b7b2ad`)

        weatherdata.then(function (success) {
            setweather(success.data.weather[0].main)
            settemp((success.data.main.temp - 273.15).toFixed(0) + "°C")
            setdesc(success.data.weather[0].description)
            console.log(success.data.weather[0].main)
            if (success.data.weather[0].main == "Clouds") {
                setweatherimg(`https://openweathermap.org/img/wn/${weatherimgcode[success.data.weather[0].description]}@2x.png`)
            } else {
                setweatherimg(`https://openweathermap.org/img/wn/${weatherimgcode[success.data.weather[0].main]}@2x.png`)
            }


        }).catch(() => { alert("Incorrect name of the city. Please input correct value") })
},[])

    function handlecity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {

        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa3b687b8bbb078d3975636723b7b2ad`)

        weatherdata.then(function (success) {
            setweather(success.data.weather[0].main)
            settemp((success.data.main.temp - 273.15).toFixed(0) + "°C")
            setdesc(success.data.weather[0].description)
            console.log(success.data.weather[0].main)
            if (success.data.weather[0].main == "Clouds") {
                setweatherimg(`https://openweathermap.org/img/wn/${weatherimgcode[success.data.weather[0].description]}@2x.png`)
            } else {
                setweatherimg(`https://openweathermap.org/img/wn/${weatherimgcode[success.data.weather[0].main]}@2x.png`)
            }


        }).catch(() => { alert("Incorrect name of the city. Please input correct value") })


    }

    return (
        <>
            <div className="blackbackground">

                <div className="greenbackground">

                    <h1 className="heading">Weather Report</h1>
                    <p>Get the weather report about your city!</p>
                    <img className="weatherimg" src={weatherimg} alt="" />
                    <input value={city} onChange={handlecity} type="text" className="inputbox" placeholder="Type city name.." />
                    <button onClick={getWeather} className="getreportbtn">Get Report</button>

                    <div className="mt-2">
                        <p><b>Weather:</b> {weather}</p>
                        <p><b>Temperature:</b> {temp}</p>
                        <p><b>Description:</b> {desc}</p>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Weatherapp