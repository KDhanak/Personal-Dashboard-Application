import axios from "axios"
import { useState, useEffect } from "react";
import dateAndTime from "../../utils/dateAndTime";

const Weather = () => {
// Asking the user for the location of which they want to see the weather conditions.
    const [data, setData] = useState<any>({});
    const {currentDay, currentTime} = dateAndTime()

    useEffect(() => {
        const timeId = setInterval(() => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude} = position.coords;
                        const fetchCurrentData = async () => {
                            try {
                                const response = await axios.post(`http://localhost:8000/core/weather`, {
                                    latitude: latitude,
                                    longitude: longitude,
                                });
                                const fetched_data = response.data;
                                setData(fetched_data)
        
                            } catch (error) {
                                console.error("Error Fetching Data", error);
                            }
                        };
                
                        if (latitude && longitude) {
                            fetchCurrentData();
                        }
                    },
                    (error) => {
                        console.error('Error getting location:', error.message)
                    }
                )
                
            }
            else{
                console.log("The geolocation did not work.")
            }
    
        }, 1000);

        return () => clearInterval(timeId);
        }, [])    


    return(
        <div className="fixed top-0 left-0 w-full bg-white z-50 border-b-2 border-slate-500">
            <div className="top min-w-screen flex items-center justify-center">
                <div className="flex flex-row bg-white rounded justify-between w-full">
                    <div className="flex flex-row bg-white items-center">
                        <div className="flex flex-col items-center">
                        <div className="text-6xl self-center inline-flex items-center justify-center rounded-lg h-12 w-20">
                        <img src = {`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt="icon"></img>
                        </div>
                            <div className="font-light text-gray-500">{data?.weather?.[0]?.description}</div>
                        </div>
                        <div className="font-bold text-xl ml-8">{data?.name}
                        <div className="text-sm text-gray-500">{currentDay}   {currentTime} </div>
                        </div>
                    </div>
                    <div className="flex flex-row bg-white rounded p-3">
                        <div className="font-medium text-3xl text-center">{data?.main?.temp} &#8451;
                            <div className="flex flex-row items-center">
                                <div className="p-1">
                                    <span className="text-sm">max: </span>
                                    <span className="text-sm font-light text-gray-500">{data?.main?.temp_max}</span>
                                </div>
                                <div className="p-1">
                                    <span className="text-sm">min: </span>
                                    <span className="text-sm font-light text-gray-500">{data?.main?.temp_min}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col items-center p-3">
                                <div className="font-medium text-sm">Wind</div>
                                <div className="text-sm text-gray-500">{data?.wind?.speed}</div>
                            </div>
                            <div className="flex flex-col items-center p-3">
                                <div className="font-medium text-sm">Humidity</div>
                                <div className="text-sm text-gray-500">{data?.main?.humidity}%</div>
                            </div>
                            <div className="flex flex-col items-center p-3">
                                <div className="font-medium text-sm">Visibility</div>
                                <div className="text-sm text-gray-500">{data?.visibility}m</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;