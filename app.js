const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
// add event listener for click
searchBtn.addEventListener('click', () => {
        weatherLocationHandler();
})
// add event listener for click
searchBox.addEventListener('keypress', function (e) {
    if (13 == e.keyCode) {
        weatherLocationHandler();
        event.preventDefault();//for stop auto reloading
    }
});
function submitOnEnter() {}

function weatherLocationHandler() {
        const cityNameInput = document.getElementById("search-box").value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameInput}&appid=549d1ce6ff3ae1616829b7a43d66cd06`)
            .then(response => response.json())
            .then(data => {
                // cityName set
                const cityName = data.name;
                document.querySelector("#city-name-display").innerHTML = `${cityName}, ${data.sys.country}`;
                // temperature set
                let temperature = data.main.temp;
                temperature = temperature - 273;
                document.querySelector('#temperature-display').innerHTML = temperature.toFixed(2);
                // weather description set
                const weatherDescription = data.weather[0].description;
                document.querySelector("#weather-description").innerHTML = weatherDescription;
                // weather icon set
                document.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                console.log(data);
            })
    }

