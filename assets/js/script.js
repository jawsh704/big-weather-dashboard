var apiKey = "6f99554d79c2dead2ca7bf90475849c2"
var searchBtn = document.getElementById("searchBtn");
var cityName = document.getElementById("cityName");
var forecastDiv = document.getElementById("forecastDiv");

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
searchBtn.addEventListener("click", function() {
    firstApi(cityName.value);
})
function firstApi(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiUrl).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        secondApi(data.coord.lat, data.coord.lon);
        // run the function that is going to create the search buttons
    })
}

function secondApi(lat, lon) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(apiUrl).then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 1; i < 6; i++) {
            var h4 = document.createElement("h4");
            h4.innerText = data.daily[i].temp.day;
            console.log(data.daily[i].temp.day);
            forecastDiv.append(h4);
        }
    })
}