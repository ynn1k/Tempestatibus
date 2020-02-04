//init weather obj
const weather = new Weather('Bochum', 'metric');
const ui = new UI();

//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
    weather.getWeather()
        .then(result => {
            ui.render(result);
        })
        .catch(err => console.log(err));
}
