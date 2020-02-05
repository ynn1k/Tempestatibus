//init storage obj
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//init weather obj
const weather = new Weather(weatherLocation.city, 'metric');
//init UI obj
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   weather.changeLocation(city);
   //save location to localstorage
   storage.setLocationData(city);
   //update weather data
   getWeather()
});


function getWeather() {
    weather.getWeather()
        .then(result => {
            ui.render(result);
        })
        .catch(err => console.log(err));
}
