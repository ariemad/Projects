import "./style.scss"
import _ from 'lodash';
import MyImage from "./img/fish.jpg"

function component() {
    const element = document.createElement('div');
  
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

alert("Hey you")
  
  const heroContentEL = document.createElement("div")
  heroContentEL.classList.add("hero")
  heroContentEL.textContent="Hello im heroContent"
  
  const imgFish = new Image()
  imgFish.src = MyImage
  
  heroContentEL.appendChild(imgFish)
  
  document.body.append(heroContentEL)