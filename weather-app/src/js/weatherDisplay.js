import WeatherClear from '../img/weather-description/clear.jpg';
import WeatherClouds from '../img/weather-description/clouds.jpg';
import WeatherDrizzle from '../img/weather-description/drizzle.jpg';
import WeatherRain from '../img/weather-description/rain.jpg';
import WeatherSnow from '../img/weather-description/snow.jpg';
import WeatherThunderstorm from '../img/weather-description/thunderstorm.jpg';

import Temp from '../img/thermometer-svgrepo-com.svg';
import Wind from '../img/wind-svgrepo-com (2).svg';
import Cloud from '../img/cloud-svgrepo-com.svg';

import Weather from './weather';

function updateBackground(description) {
  if (description === undefined) {
    document.body.style.backgroundColor = '#bbb';
  } else {
    const table = {
      Clouds: WeatherClouds,
      Clear: WeatherClear,
      Snow: WeatherSnow,
      Rain: WeatherRain,
      Drizzle: WeatherDrizzle,
      Thunderstorm: WeatherThunderstorm,
    };
    document.body.style.backgroundImage = `url(${table[description]})`;
  }
}

function weatherDisplay() {
  const container = document.getElementById('container');

  const display = document.createElement('div');
  display.classList.add('display', 'hidden');

  const array = {
    'display-title': {},
    'display-clouds': { src: Cloud },
    'display-temp': { src: Temp },
    'display-wind': { src: Wind },
    'display-cloudsValue': {},
    'display-tempValue': {},
    'display-windValue': {},
  };

  Object.keys(array).map((key) => {
    const temp = document.createElement('div');
    temp.classList.add(`${key}`);
    if (array[key].src !== undefined) {
      const img = new Image();
      img.classList.add('symbol');
      img.src = array[key].src;
      temp.append(img);
    }
    display.append(temp);
    return '';
  });

  container.append(display);
}

async function updateDisplay(toSearch) {
  const display = document.querySelector('.display');
  display.classList.add('hidden');

  const myWeather = new Weather();
  myWeather.setApiKey('60a010e1e0f7e9c82e885fe734de8837');
  myWeather.setLocation(toSearch);
  const data = await myWeather.getWeather();

  const updateTable = {
    'display-title': `${data.city} - ${data.description}`,
    'display-cloudsValue': `${data.clouds} %`,
    'display-tempValue': `${Math.round((data.temp - 273.15) * 10) / 10} \u00B0C`,
    'display-windValue': `${Math.round(data.wind * 10) / 10} m/s`,
  };

  updateBackground(data.description);

  Object.keys(updateTable).map((key) => {
    const element = document.getElementsByClassName(key)[0];
    element.textContent = updateTable[key];
    return '';
  });
  display.classList.remove('hidden');
}

export { weatherDisplay, updateDisplay, updateBackground };
