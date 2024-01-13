const apiKey = "e67a1cf6653a8a9c4d8b46af5725b64b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWheather() {
  let text = input.value;
  const response = await fetch(apiUrl + `&q=${text}` + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();
    //console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/hr";

    let weatherType = data.weather[0].main;
    if (weatherType === "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (weatherType === "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (weatherType === "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherType === "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (weatherType === "mist") {
      weatherIcon.src = "images/mist.png";
    } else if (weatherType === "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (weatherType === "Smoke") {
      weatherIcon.src = "images/smoke.png";
    }

    weather.style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  checkWheather();
});
