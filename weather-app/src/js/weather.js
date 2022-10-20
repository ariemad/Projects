class Weather {
  constructor() {
    this.apiKey = '';
    this.location = '';
    this.weather = undefined;
  }

  setApiKey(apiKey) {
    this.apiKey = apiKey;
  }

  setLocation(location) {
    this.location = location;
  }

  #formatLocation() {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${this.location}&appid=${this.apiKey}`;
  }

  async #getLocationLatLon() {
    const response = await fetch(this.#formatLocation(), { mode: 'cors' });
    const data = await response.json();
    return [data[0].lat, data[0].lon];
  }

  async #formatURL() {
    let locationLat = '';
    let locationLon = '';
    [locationLat, locationLon] = await this.#getLocationLatLon();
    return `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLon}&appid=${this.apiKey}`;
  }

  async getWeather() {
    const url = await this.#formatURL();
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const processedData = {
      clouds: data.clouds.all,
      temp: data.main.temp,
      city: data.name,
      wind: data.wind.speed,
      description: data.weather[0].main,
    };
    return processedData;
  }
}

export default Weather;
