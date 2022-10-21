import '../css/style.scss';
import { updateDisplay, weatherDisplay } from './weatherDisplay';

import weatherSearchBar from './weatherSearchBar';

weatherSearchBar();
weatherDisplay();
updateDisplay('London');

// myWeather.setApiKey('60a010e1e0f7e9c82e885fe734de8837');
// myWeather.setLocation(toSearch);
// console.log(myWeather.getWeather());
