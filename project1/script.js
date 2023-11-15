const apiKey = "020dc987ddaf3b9ddb59e675a73537c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weatherIcon=document.querySelector('.weather-icon');
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
async function get_weather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);
    if (response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        document.querySelector(".error").style.display = "none";
        
        const data = await response.json();
        
        
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
        
        // console.log(data);
        // console.log(data.name);
        // console.log(data.main.temp);
        // console.log(data.main.humidity);
        // console.log(data.wind.speed);
        
        if (data.weather[0].main == "Cloud") {
            weatherIcon.src = "img/weather(1).png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/sun.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/weather(2).png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/weather(3).png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/weather.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        return data;
    }
}
searchbtn.addEventListener("click", () => {
     weather = get_weather(searchbox.value);
 })
weather = get_weather();
