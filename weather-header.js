// #######################################################################################################
//                                              API FETCH
// #######################################################################################################
const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=9126b92d5b9e8da7087fdcba66a4b7be";
fetch(weatherAPI)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
// #######################################################################################################
//                                              ESTABLISHING WEATHER SECTION VARIABLE
// #######################################################################################################
let currentSummary = document.querySelector("div.currentSummary");
//    console.log(currentSummary);
summaryChildren = currentSummary.children;
// console.log(currentSummary);
// #######################################################################################################
//                                              ESTABLISHING CITY NAME VARIABLE
// #######################################################################################################
let cityName = document.createElement("h3");
cityName.textContent = jsObject.name;
currentSummary.insertBefore(cityName, summaryChildren[1]);
// #######################################################################################################
//                                              ESTABLISHING CURRENT WEATHER DESCRIPTION VARIABLE
// #######################################################################################################
let weatherArray = jsObject.weather;
let mainArray = jsObject.main;
for(let i = 0; i < weatherArray.length; i++){
    let currentDescription = document.querySelector("#currentDescription")
    currentDescription.textContent = weatherArray[0].description;
}
// #######################################################################################################
//                                              ESTABLISHING CURRENT TEMPERATURE VARIABLE
// #######################################################################################################
let mainTemp = jsObject.main.temp;
    // console.log(currentTemperature);
let kelvinTemp = mainTemp;
let kelvinCelsius = kelvinTemp - 273;
let kelvinFahrenheit = (kelvinTemp - 273) * 9/5 + 32;
let fahrTemp = Math.floor(kelvinFahrenheit);
currentTemperature.textContent = fahrTemp;

// let celsiusFahrenheit = (fahrenheitCelsius - 32) * 5/9;
// let fahrenheitCelsius = (celsiusFahrenheit * 9/5) + 32;
// let fahrenheitKelvin = celsiusFahrenheit + 273; 
// let kelvinFahrenheit = celsius + 273;
// #######################################################################################################
//                                              ESTABLISHING CURRENT HUMIDITY VARIABLE
// #######################################################################################################
let humidity = jsObject.main.humidity;
let currentHumidity = document.querySelector("#currentHumidity");
currentHumidity.textContent = humidity;
// #######################################################################################################
//                                              ESTABLISHING CURRENT WINDSPEED VARIABLE
// #######################################################################################################
let windSpeed = jsObject.wind.speed;
// console.log(windSpeed);
let currentWindSpeed = document.querySelector("#currentWindSpeed");
currentWindSpeed.textContent = windSpeed;
// #######################################################################################################
//                                              ESTABLISHING CURRENT WINDCHILL VARIABLE
// #######################################################################################################
let windChill = Math.floor(fahrTemp - (windSpeed * 0.7));
console.log(windChill);
let currentWindChill = document.querySelector("#currentWindChill");
currentWindChill.textContent = windChill;
})