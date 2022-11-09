import React, { useState} from 'react';
import './weatherCss.css';


const api = {
  key: "9964f0485c7cff6f400d1db2b6bd331c",
  base: "https://api.openweathermap.org/data/2.5/"
}

function WeatherPage() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="weather1">

      <h5 className='title'> Write a place name to check the weather temperature
         
      </h5>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a place name to get the weather status"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div className='groub'>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default WeatherPage;


/*

import React, { useState} from 'react';
import './weatherCss.css';

const api= {
    key: "9964f0485c7cff6f400d1db2b6bd331c",
    base:"https://api.openweathermap.org/data/2.5"
}
function  WeatherPage () {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if(evt.key=== "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => 
             { 
                setWeather(result);
                setQuery('');
                console.log(result);
            });
        }
    }


   const dateBuilder= (d) => {
     let months = ['January','February','March','April','May','June','July',
                    'August','September','October','November','December'
        ];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day}  ${date}  ${month}  ${year}`;

   };
        return ( 
            
            
        <div className='weather1'>
        
            <main className='container'>
                <div className='search-box'>
                    <input type="text"
                    className='search-bar'
                    placeholder='Search...'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                    
                    
                    />
                    
                </div>
                
                <div className='location-box'>
                <div className="location"></div>
                <div className='date'>{dateBuilder(new Date())}</div>
                </div>
                <div className='weather-box'>
                    <div className='temp'> 15 c
                    
                    </div>

                    <div className='weather'>Sunny </div>
                </div>




            </main>
         </div>
            
            
            
            );
    
}
 
export default WeatherPage;
*/
