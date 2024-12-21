import { useState } from "react"
import axios from "axios"

function Weatherapp() {

    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc,setdesc]=useState("")

    function handlecity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {

        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa3b687b8bbb078d3975636723b7b2ad`)

        weatherdata.then(function (success) {
            setweather(success.data.weather[0].main)
            settemp((success.data.main.temp-273.15).toFixed(0)+"°C")
            setdesc(success.data.weather[0].description)
        }).catch(()=>{alert("Incorrect name of the city. Please input correct value")})

    }

    return (
        <>
            <div className="bg-black p-20">

                <div className="bg-green-400 p-10 rounded-md">

                    <h1 className="text-2xl font-medium">Weather Report</h1>
                    <p>Get the weather report about your city!</p>
                    <input value={city} onChange={handlecity} type="text" className="mt-2 p-1 border border-black rounded" placeholder="Type city name.." />
                    <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2 block">Get Report</button>

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