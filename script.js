const apiKey = "9d5a4251e6af08c99aa89a6da32e521d";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const cloudIcon = document.querySelector(".cloud-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C" ;
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";
    if(data.weather[0].main == "Clouds"){
        cloudIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        cloudIcon.src = "clear.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        cloudIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Rain"){
        cloudIcon.src = "rain.png";
    }
     else if(data.weather[0].main == "Mist"){
        cloudIcon.src = "mist.png";
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})

