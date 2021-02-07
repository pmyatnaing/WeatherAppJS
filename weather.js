class Weather {
    constructor(city, country) {
        this.apiKey = '9229d03ecb5283fd28ed2c252cbe9508';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}