
function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let min = date.getMinutes();
if (min < 10) {
	min = `0${min}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[date.getDay()];
console.log(date);
return `${day} ${hours}:${min}`;
}

// currentTime.innerHTML = formatDay(date);

//вбиваеш місто і тобі видає його в строці
//частина коду 1
function cityForm(event) {
  event.preventDefault();

  let cityType = document.querySelector("#city-input");

  
  function showWeather2(response) {
    console.log(response.date);
    //округляємо температуру
  let temperature = Math.round(response.data.main.temp);
    //визначаємо що будемо зминювати крадуси за допомогою розпізнавача кваріСелектор
	let currentTime = document.querySelector("#current-time");
  let numberG = document.querySelector("#number-19");
  let weatherType = document.querySelector("#current-weather");
	let humidly = document.querySelector("#current-humidly");
	let wind = document.querySelector("#current-wind");
	let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;
	//визначаємо температуру та замінюємо
	currentTime.innerHTML = formatDate(response.data.dt * 1000);
    numberG.innerHTML = `${temperature}`;
    //   //визначаємо та змінюємо один з показників погоди клауді
    weatherType.innerHTML = `${response.data.weather[0].description}`;
    //   //визначаємо і змінюємо  Humidly: 77%
    humidly.innerHTML = `Humidly: ${response.data.main.humidity}%`;
    //   //визначаємо і змінюємо  Wind: 8 km/h
    wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;

	iconElement.setAttribute("src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
iconElement.setAttribute("alt", response.data.weather[0].description);
	showWeather2(response.data.coord);
  }
  
  let apiKey = "c23a447e19efb6f70d65b26b00702afa";
  let city2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityType.value}&units=metric`;

  
  axios.get(`${city2}&appid=${apiKey}`).then(showWeather2);

  // //частина коду 1/2
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Here is ${cityType.value} info 😽`;
}

function showFahrenheitLinkTemp(event) {
  event.preventDefault();
  
  let temperatureElement = document.querySelector("#number-19"); 

  celsiusLink.classList.remove("me");
  fahrenheitLink.classList.add("me");

  let fahrenheitConvert = (celsiusTemperature * 9) / 5 + 32;
  // alert(fahrenheitConvert);
  temperatureElement.innerHTML = Math.round(fahrenheitConvert); 
}

function showCelsiusLinkTemp(event) {
  event.preventDefault();

  celsiusLink.classList.add("me");
  fahrenheitLink.classList.remove("me");

  let temperatureElementCel = document.querySelector("#number-19"); 
  temperatureElementCel.innerHTML = Math.round(celsiusTemperature);

}


let celsiusTemperature = null;

let city = document.querySelector("#submit-city");
city.addEventListener("click", cityForm);

//там де по місту показує погоду 

//5/8HMW delete
let fahrenheitLink = document.querySelector("#degree-F");
fahrenheitLink.addEventListener("click", showFahrenheitLinkTemp);

let celsiusLink = document.querySelector("#degree-C");
celsiusLink.addEventListener("click", showCelsiusLinkTemp);


