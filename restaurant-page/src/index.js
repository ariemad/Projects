import "./style.scss";

import "./js/home.js"
import "./js/menu.js"
import "./js/contact.js"

function changeSection(section){
  const contentContainer = document.getElementById("content-container");
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild)
  }
  contentContainer.append(section())
}

function nav() {
  const navEl = document.querySelector("nav")

  const restaurantNameEl = document.createElement("span")
  restaurantNameEl.textContent = "Salmon Delight"
  restaurantNameEl.classList.add("restaurant-name", "mrg-right")
  navEl.append(restaurantNameEl)

  const textHomeEL = document.createElement("a")
  textHomeEL.textContent = "Home"
  navEl.append(textHomeEL)
  textHomeEL.addEventListener("click", e => {
    changeSection(home)
  })

    const textMenuEL = document.createElement("a")
  textMenuEL.textContent = "Menu"
  navEl.append(textMenuEL)
  textMenuEL.addEventListener("click", e => {
    changeSection(menu)
  })

    const textContactEL = document.createElement("a")
  textContactEL.textContent = "Contacts"
  navEl.append(textContactEL)
  textContactEL.addEventListener("click", e => {
    changeSection(contact)
  })

  

  
}

function footer(){
  const footerEl = document.querySelector("footer")

  const creditsEL = document.createElement("p")
  creditsEL.textContent = "Images by: Ivan Sankov, Nicole Densmoon and Maria Bulczka"
  footerEl.append(creditsEL)

}

nav()
changeSection(home)
footer()
