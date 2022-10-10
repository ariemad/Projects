import Sushi1 from "./img/menu/Sushi1.jpg"
import Sushi2 from "./img/menu/Sushi2.jpg"
import Sushi3 from "./img/menu/Sushi3.jpg"
import Grilled1 from "./img/menu/Grilled1.jpg"
import Grilled2 from "./img/menu/Grilled2.jpg"
import Grilled3 from "./img/menu/Grilled3.jpg"
import Wine1 from "./img/menu/Wine1.png"
import Wine2 from "./img/menu/Wine2.png"
import Wine3 from "./img/menu/Wine3.png"

export function menu() {
    const menuEl = document.createElement("div")
    menuEl.classList.add("menu")
  
    const menuDescriptionEL = document.createElement("h1")
    menuDescriptionEL.textContent = "Menu"
    menuEl.append(menuDescriptionEL)
  
    // Sushi section
  
    const sushiTitle = document.createElement("h2")
    sushiTitle.textContent="Sushi"
    menuEl.append(sushiTitle)
  
    const sushiContainer = document.createElement("div")
    sushiContainer.classList.add("sushi-grid", "grid--3-cols")
  
    const textSushi1 = document.createElement("h3")
    textSushi1.textContent = "Chirashi"
    sushiContainer.append(textSushi1)
  
    const textSushi2 = document.createElement("h3")
    textSushi2.textContent = "California Rolls"
    sushiContainer.append(textSushi2)
  
    const textSushi3 = document.createElement("h3")
    textSushi3.textContent = "Tamagoyaki"
    sushiContainer.append(textSushi3)
  
    const imgSushi1 = new Image()
    imgSushi1.src = Sushi1
    sushiContainer.append(imgSushi1)
  
    const imgSushi2 = new Image()
    imgSushi2.src = Sushi2
    sushiContainer.append(imgSushi2)
  
    const imgSushi3 = new Image()
    imgSushi3.src = Sushi3
    sushiContainer.append(imgSushi3)
  
    menuEl.append(sushiContainer)
  
    // Grilled Fish
  
    const grilledTitle = document.createElement("h2")
    grilledTitle.textContent="Grilled Fish"
    menuEl.append(grilledTitle)
  
    const grilledContainer = document.createElement("div")
    grilledContainer.classList.add("grilled-grid", "grid--3-cols")
  
    const textGrilled1 = document.createElement("h3")
    textGrilled1.textContent = "Grilled Branzino"
    grilledContainer.append(textGrilled1)
  
    const textGrilled2 = document.createElement("h3")
    textGrilled2.textContent = "Fish Tacos"
    grilledContainer.append(textGrilled2)
  
    const textGrilled3 = document.createElement("h3")
    textGrilled3.textContent = "Cedar Plank Salmon"
    grilledContainer.append(textGrilled3)
  
    const imgGrilled1 = new Image()
    imgGrilled1.src = Grilled1
    grilledContainer.append(imgGrilled1)
  
    const imgGrilled2 = new Image()
    imgGrilled2.src = Grilled2
    grilledContainer.append(imgGrilled2)
  
    const imgGrilled3 = new Image()
    imgGrilled3.src = Grilled3
    grilledContainer.append(imgGrilled3)
  
    menuEl.append(grilledContainer)
  
    // Wine
  
    const wineTitle = document.createElement("h2")
    wineTitle.textContent="Wine"
    menuEl.append(wineTitle)
  
    const wineContainer = document.createElement("div")
    wineContainer.classList.add("wine-grid", "grid--3-cols")
  
    const textWine1 = document.createElement("h3")
    textWine1.textContent = "Caymus Cabernet Sauvignon 2019"
    wineContainer.append(textWine1)
  
    const textWine2 = document.createElement("h3")
    textWine2.textContent = "Bread & Butter Chardonnay 2020"
    wineContainer.append(textWine2)
  
    const textWine3 = document.createElement("h3")
    textWine3.textContent = "DAOU Cabernet Sauvignon 2018"
    wineContainer.append(textWine3)
  
    const imgWine1 = new Image()
    imgWine1.src = Wine1
    wineContainer.append(imgWine1)
  
    const imgWine2 = new Image()
    imgWine2.src = Wine2
    wineContainer.append(imgWine2)
  
    const imgWine3 = new Image()
    imgWine3.src = Wine3
    wineContainer.append(imgWine3)
  
    menuEl.append(wineContainer)
  
    return menuEl
  }
  