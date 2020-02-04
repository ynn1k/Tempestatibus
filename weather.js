class Weather {
    constructor(city, unit) {
        this.apiKey = 'ecee45cd0b4c8fb64ccb76a0aa2d3581' //go have some fun with it...
        this.city = city;
        this.unit = unit;
    }

    //fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.unit}`);
        const responseData = await response.json();
        return responseData;
    }

    //change weather location
    changeLocation(city) {
        this.city = city;
    }
}