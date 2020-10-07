class UI {
    constructor() {
        this.descriptionMain =  document.getElementById('w-descMain');
        this.description =      document.getElementById('w-desc');
        this.temperature =      document.getElementById('w-string');
        this.feelsLike =        document.getElementById('w-feels-like');
        this.location =         document.getElementById('w-location');
        this.humidity =         document.getElementById('w-humidity');
        this.sunrise =          document.getElementById('w-sunrise');
        this.sunset =           document.getElementById('w-sunset');
        this.wind =             document.getElementById('w-wind');
        this.icon =             document.getElementById('w-icon');
    }

    render(weather) {
        console.log(weather);
        this.descriptionMain.textContent =  weather.weather[0].main;
        this.description.textContent =      weather.weather[0].description;
        this.temperature.textContent =      weather.main.temp;
        this.feelsLike.textContent =        weather.main.feels_like;
        this.location.textContent =         weather.name + ', ' + weather.sys.country;
        this.humidity.textContent =         weather.main.humidity;
        this.sunrise.textContent =          this.formatTime(weather.sys.sunrise);
        this.sunset.textContent =           this.formatTime(weather.sys.sunset);
        this.wind.textContent =             weather.wind.speed;
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.updateFavicon(weather.weather[0].icon);
    }

    //returns unix timestamp in HH:MM
    formatTime(timestamp) {
        let date = new Date(timestamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        return hours + ':' + minutes.substr(-2);
    }

    updateFavicon(weatherIcon) {
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
}

