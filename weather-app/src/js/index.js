import '../css/style.scss';
import Weather from './weather';

const myWeather = new Weather();
myWeather.setApiKey('60a010e1e0f7e9c82e885fe734de8837');
myWeather.setLocation('London');
const a = myWeather.getWeather();
console.log(a);
