const apikey = "6fba602b823d5ad5acad78bbdb0ae9c9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector('.weather-icon');
const bg = document.getElementById("body");
async function checkweather(city) {
    const response = await fetch(apiurl + city + "&appid=" + apikey);
    console.log(response);
    if (response.status == 404) {
        document.querySelector(`.error`).style.display = 'block';
        document.querySelector(`.weather`).style.display = 'none';
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "img/clouds.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "img/rainy.png"
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "img/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "img/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "img/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})