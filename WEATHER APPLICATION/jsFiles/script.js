// variables declearations
let result = document.getElementById("result");
let searchBtn = document.getElementById("searchBtn")
let searchInput = document.getElementById("searchInput")
let weather = document.getElementById("weather")
let noData = document.getElementById("noData")
let weatherImg = document.getElementById("weatherImg")
let weatherTemprature = document.getElementById("weatherTemprature")
let weatherDescription = document.getElementById("weatherDescription")
let weatherHumidity = document.getElementById("weatherHumidity")
let card = document.getElementById("card")
let body = document.getElementById("body")

// end variables declearations



// funtion for check weather
async function checkWeather(city) {
    debugger
    const apiKey = "35147b107da3338bfc05499fabaf15d3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    let weatherData = await fetch(`${url}`).then(response => response.json())

    console.log(weatherData);
    if (weatherData.cod === `404`) {
        result.style.display = "none"
        noData.style.display = "block"
        searchInput.value = "";
        body.style.height = "100vh"
        return;
    }
    
     else if(weatherData)
     {
        card.style.marginTop = "13rem"
        card.style.marginBottom = "1rem"
     }

    searchInput.value = "";
    noData.style.display = "none"
    result.style.display = "block";


    weatherDescription.innerHTML = `<h3><b id="a">Description : </b></h3>${weatherData.weather[0].description}`
    weatherTemprature.innerHTML = `<h3><b id="b">Temprature : </b></h3>${Math.round(weatherData.main.temp - 273.15)}℃`
    weatherHumidity.innerHTML = `<h3><b id="c">Humidity : </b></h3>${weatherData.main.humidity}%`


    // styling for weather font 
    document.getElementById("a").style.fontFamily = "'Times New Roman', Times, serif"
    document.getElementById("b").style.fontFamily = "'Times New Roman', Times, serif"
    document.getElementById("c").style.fontFamily = "'Times New Roman', Times, serif"
    // ending styling


    switch (weatherData.weather[0].main) {
        case "Clouds":
            weatherImg.src = "images/cloud.png"
            break;
        case "Clear":
            weatherImg.src = "images/clear.png"
            break;
        case "Rain":
            weatherImg.src = "images/rain.png"
            break;
        case "Mist":
            weatherImg.src = "images/mist.png"
            break;
        case "Snow":
            weatherImg.src = "images/snow.png"
            break;
    }
}
// end funtions for check weather


// for search btn
searchBtn.onclick = function () {
    debugger
    if (!searchInput.value) {
        alert("please enter your location")
        searchInput.focus();
        return;
    }
    checkWeather(searchInput.value)
}
// end for search btn








