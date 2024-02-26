const apiKey = "42e0008d84f4a3d106e3dc2935cafd6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weathericon")

async function checkWeather (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weathericon.src = "Assets/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weathericon.src = "Assets/clear-sky.png"
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "Assets/raining.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "Assets/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "Assets/haze.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
    
  
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
