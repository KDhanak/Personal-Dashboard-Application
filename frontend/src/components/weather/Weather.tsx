import axios from "axios";
import { useState, useEffect } from "react";
import dateAndTime from "../../utils/dateAndTime";
import apiUrlFunction from "../../utils/apiLogic";

const Weather = () => {
  // Get the API URL from the utility function
  const apiURL = apiUrlFunction();

  // State to store weather data
  const [data, setData] = useState<any>({});

  // Get the current day and time using the utility function
  const { currentDay, currentTime } = dateAndTime();

  // Fetch weather data based on user's geolocation
  useEffect(() => {
    const timeId = setInterval(() => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const fetchCurrentData = async () => {
              try {
                const response = await axios.post(`${apiURL}/core/weather`, {
                  latitude: latitude,
                  longitude: longitude,
                });
                const fetched_data = response.data;
                setData(fetched_data);
              } catch (error) {
                console.error("Error Fetching Data", error);
              }
            };

            if (latitude && longitude) {
              fetchCurrentData();
            }
          },
          (error) => {
            console.error('Error getting location:', error.message);
          }
        );
      } else {
        console.log("Geolocation did not work.");
      }
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="Weather fixed top-0 left-0 w-full bg-componentBg z-50 border-b-2 border-slate-500">
      <div className="top min-w-screen flex items-center justify-center">
        <div className="flex flex-row bg-componentBg rounded justify-between w-full">
          <div className="flex flex-row bg-componentBg items-center">
            <div className="flex flex-col items-center">
              <div className="text-6xl self-center inline-flex items-center justify-center rounded-lg h-12 w-20">
                <img
                  src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
                  alt="icon"
                ></img>
              </div>
              <div className="ml-2 text-gray-500 font-bold">
                {data?.weather?.[0]?.description}
              </div>
            </div>
            <div className="font-bold text-xl ml-8 text-textColor">
              {data?.name}
              <div className="text-sm text-gray-500">
                {currentDay} {currentTime}
              </div>
            </div>
          </div>
          <div className="flex flex-row bg-componentBg rounded p-3">
            <div className="font-medium text-3xl text-center text-textColor">
              {data?.main?.temp} &#8451;
              <div className="flex flex-row items-center">
                <div className="p-1">
                  <span className="text-sm text-textColor">max: </span>
                  <span className="text-sm text-gray-500 font-bold">
                    {data?.main?.temp_max}
                  </span>
                </div>
                <div className="p-1">
                  <span className="text-sm text-textColor">min: </span>
                  <span className="text-sm text-gray-500 font-bold">
                    {data?.main?.temp_min}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center p-3">
                <div className="font-medium text-sm text-textColor">Wind</div>
                <div className="text-sm text-gray-500 font-bold">
                  {data?.wind?.speed}
                </div>
              </div>
              <div className="flex flex-col items-center p-3">
                <div className="font-medium text-sm text-textColor">Humidity</div>
                <div className="text-sm text-gray-500 font-bold">
                  {data?.main?.humidity}%
                </div>
              </div>
              <div className="flex flex-col items-center p-3">
                <div className="font-medium text-sm text-textColor">
                  Visibility
                </div>
                <div className="text-sm text-gray-500 font-bold">
                  {data?.visibility}m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
