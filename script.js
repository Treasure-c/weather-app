

const apiKey = "e126e0d8a1ee9a5a2c63e6d308db363c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
    
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
   
    // console.log(data)

    // code to change the weather icon starts here
    if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./img/rain.png";
    } else
    
        if (data.weather[0].main == "Clouds") {
         weatherIcon.src = "./img/clouds.png";
        } else
        
        if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./img/mist.png";
        } else
        
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./img/clear.png";
        } else
        
        if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./img/drizzle.png";
        } else  
        
        if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./img/snow.png";
        }  
        // code to change weather icon ends here

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
    }

    
        
} //checkweather function ends here

searchBtn.addEventListener("click", () => {

    checkWeather(searchBox.value);
});   //search button eventlistner

