class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.descr = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelslike = document.getElementById('w-feels_like');
        this.wind = document.getElementById('w-wind');
        
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.descr.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind: ${weather.wind.speed}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.feelslike.textContent = `Feels Like: ${weather.main.feels_like}`;
    }
}