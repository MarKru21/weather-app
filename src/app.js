function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
     if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function formatHours(timestamp) {

  let date = new Date(timestamp);
    let hours = date.getHours();
     if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[date.getDay()];
    return `${hours}:${minutes}`;
}

function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let dateElement = document.querySelector("#date");
let iconElement = document.querySelector("#icon");

celciusTemperature = response.data.main.temp;

temperatureElement.innerHTML = Math.round(celciusTemperature);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = response.data.wind.speed;
dateElement.innerHTML = formatDate(response.data.dt * 1000);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function displayForecast(response) {
    let forecastElement = document.querySelector("#forecast");
    let forecast = response.data.list[0];
        forecastElement.innerHTML = `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;

     forecast = response.data.list[1];
        forecastElement.innerHTML += `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                    <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;

    forecast = response.data.list[2];
        forecastElement.innerHTML += `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                    <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;
    
    forecast = response.data.list[3];
        forecastElement.innerHTML += `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                    <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;
    
    forecast = response.data.list[4];
        forecastElement.innerHTML += `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                    <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;

    forecast = response.data.list[5];
        forecastElement.innerHTML += `<div class="col-2">
                <h4>
                ${formatHours(forecast.dt * 1000)}
                </h4>
                <img 
                src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png">
                    <p><strong>${Math.round(forecast.main.temp_max)}°
                    </strong>${Math.round(forecast.main.temp_min)}°
                    </p>
                </div>
            </div>`;
}

function search(city) {
let apiKey = "9fdfde34a67a648a41ee1aa53553e730";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayTemperature);

apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(displayForecast);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    celciusLInk.classList.remove("active");
    fahrenheitLInk.classList.add("active");
     let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelciusTemperature(event) {
    event.preventDefault();
     celciusLInk.classList.add("active");
    fahrenheitLInk.classList.remove("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celciusTemperature);
}

let celciusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLInk = document.querySelector("#Fahrenheit-link");
fahrenheitLInk.addEventListener("click", displayFahrenheitTemperature);

let celciusLInk = document.querySelector("#celcius-link");
celciusLInk.addEventListener("click", displayCelciusTemperature);

search("Berlin");