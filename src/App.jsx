import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";
import Details from "./components/Details";

function App() {
  const [city, setCity] = useState("Kathmandu");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=e1addaa7232a4b58a92161114241003&q=${city}&aqi=no`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);
  return (
    <div className="bg-gradient-to-r from-slate-600 to-indigo-600 h-screen flex justify-center  items-start gap-5 ">
      <div className="w-1/5 h-1/3 mt-40 border-2 rounded-xl ">
        {weatherData && (
          <Weather
            setCity={setCity}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />
        )}
      </div>
      <div className="w-1/3 h-1/3 mt-40 p-10 grid grid-cols-2 gap-6 border-2 rounded-xl ">
        <h1 className="text-white text-2xl col-span-2">
          Today's Highlights
        </h1>
        {weatherData && (
          <>
            <Details
              stats={{
                title: "Wind Status",
                value: weatherData.current.wind_mph,
                unit: "mph",
                direction: weatherData.current.wind_dir,
              }}
            />
            <Details
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />
            <Details
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <Details
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;