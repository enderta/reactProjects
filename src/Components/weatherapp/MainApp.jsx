import React from 'react'
import CurrentWeather from './CurrentWeather'
import Search from './Search'
import Forecast from './Forecast'

import './main.css'

const MainApp = () => {
    const [currentWeather, setCurrentWeather] = React.useState(null)
    const [forecast, setForecast] = React.useState(null)
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch=fetch(`https://api.openweathermap.org/data/2.5/weather${lat}&lon=${lon}&appid=2485511966e87cd30295308b0a1a6e3b`)
        const forecastWeatherFetch=fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2485511966e87cd30295308b0a1a6e3b`)
        Promise.all([currentWeatherFetch,forecastWeatherFetch])
        .then(async (response)=>{
            const weatherResponse=await response[0].json()
            const forecastResponse=await response[1].json()
            setCurrentWeather({city: searchData.label, ...weatherResponse})
            setForecast({city: searchData.label, ...forecastResponse})
        })
    }
  return (
    <div className='container'>
        <Search onSearchCange={handleOnSearchChange} />
      {currentWeather &&  <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default MainApp