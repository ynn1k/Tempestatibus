class UI {
    constructor() {
        this.descriptionMain =  document.getElementById('w-descMain');
        this.description =  document.getElementById('w-desc');
        this.temperature =  document.getElementById('w-string');
        this.feelsLike =    document.getElementById('w-feels-like');
        this.location =     document.getElementById('w-location');
        this.humidity =     document.getElementById('w-humidity');
        this.details =      document.getElementById('w-details');
        this.sunrise =      document.getElementById('w-sunrise');
        this.sunset =       document.getElementById('w-sunset');
        this.wind =         document.getElementById('w-wind');
        this.icon =         document.getElementById('w-icon');
    }

    render(weather) {
        console.log(weather);
        this.descriptionMain.textContent    = weather.weather[0].main;
        this.description.textContent    = weather.weather[0].description;
        this.temperature.textContent    = `${weather.main.temp} °C`;
        this.feelsLike.textContent      = `Feels like: ${weather.main.feels_like} °C`;
        this.location.textContent       = weather.name + ', ' + weather.sys.country;
        this.humidity.textContent       = `Humidity: ${weather.main.humidity} %`;
        this.sunrise.textContent        = `Sunrise: ${weather.sys.sunrise}`;
        this.sunset.textContent         = `Sunset: ${weather.sys.sunset}`;
        this.wind.textContent           = `Wind: ${weather.wind.speed} m/sec.`;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    }
}