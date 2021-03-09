function displayTemperature(response) {
    console.log(response.data);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=9fdfde34a67a648a41ee1aa53553e730&units=metric";

axios.get(apiURL).then(displayTemperature);