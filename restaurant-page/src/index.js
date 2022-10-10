import "./style.scss";

// HOME IMAGES

import MyImage4 from "./img/home/fish.jpg";
import MyImage2 from "./img/home/drinks-sushi.jpg";
import MyImage3 from "./img/home/friends-sushi.jpg";
import MyImage from "./img/home/restaurant.jpg";
import LocationImage from "./img/home/location.jpg"

// MENU IMAGES

import Sushi1 from "./img/menu/Sushi1.jpg"
import Sushi2 from "./img/menu/Sushi2.jpg"
import Sushi3 from "./img/menu/Sushi3.jpg"
import Grilled1 from "./img/menu/Grilled1.jpg"
import Grilled2 from "./img/menu/Grilled2.jpg"
import Grilled3 from "./img/menu/Grilled3.jpg"
import Wine1 from "./img/menu/Wine1.png"
import Wine2 from "./img/menu/Wine2.png"
import Wine3 from "./img/menu/Wine3.png"

// CONTACT IMAGES

import Person1 from "./img/contact/Portrait_Placeholder.png"
import Person2 from "./img/contact/Portrait_Placeholder.png"
import Person3 from "./img/contact/Portrait_Placeholder.png"
import Person4 from "./img/contact/Portrait_Placeholder.png"

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
    changeSection(hero)
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

function hero() {
  const heroEl = document.createElement("div");
  heroEl.classList.add("hero");

  const heroImgContainerEL = document.createElement("div");
  heroImgContainerEL.classList.add("hero-img-container");

  const imgFish = new Image();
  imgFish.src = MyImage;
  imgFish.classList.add("hero-img");
  heroImgContainerEL.append(imgFish);

  const imgFish2 = new Image();
  imgFish2.src = MyImage2;
  imgFish2.classList.add("hero-img");
  heroImgContainerEL.append(imgFish2);

  const imgFish3 = new Image();
  imgFish3.src = MyImage3;
  imgFish3.classList.add("hero-img");
  heroImgContainerEL.append(imgFish3);

  const imgFish4 = new Image();
  imgFish4.src = MyImage4;
  imgFish4.classList.add("hero-img");
  heroImgContainerEL.append(imgFish4);

  const heroTextEl = document.createElement("div");
  heroTextEl.classList.add("hero-text");

  const heroTitleEl = document.createElement("h1");
  heroTitleEl.textContent = "Salmon Delight";
  heroTextEl.append(heroTitleEl);

  const heroTitle2El = document.createElement("h2");
  heroTitle2El.textContent = "Japanese Restaurant for Sushi Lovers";
  heroTextEl.append(heroTitle2El);

  const heroTitle4El = document.createElement("p");
  heroTitle4El.textContent = "";
  heroTextEl.append(heroTitle4El);

  const heroTitle3El = document.createElement("p");
  heroTitle3El.textContent =
    "Salmon Delight opened in 2016 on Gulf shore beach as a bar for surfers and tourists.\n Raising in popularity after winning the `Best Sushi of Gulf` and `Best SeaFood of Alabama` awards in 2018. The restaurant opened in 2019 on Orange Beach.";
  heroTextEl.append(heroTitle3El);

  const locationTitleEl = document.createElement("h2");
  locationTitleEl.classList.add("pd-top-30");
  locationTitleEl.textContent = "Location";
  heroTextEl.append(locationTitleEl);

  const locationImage = new Image()
  locationImage.src = LocationImage
  locationImage.classList.add("location-image")
  heroTextEl.append(locationImage)

  heroEl.append(heroTextEl);
  heroEl.append(heroImgContainerEL);

  return heroEl;
}

function menu() {
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

function contact(){
  const contactEL = document.createElement("div")
  contactEL.classList.add("contact")

  const personContainer = document.createElement("div")
  personContainer.classList.add("person-container")

  const contactDescriptionEL = document.createElement("h1")
  contactDescriptionEL.textContent = "Contacts"
  contactEL.append(contactDescriptionEL)

// Person 1

  const person1EL = document.createElement("div")
  
  const person1Name = document.createElement("h2")
  person1Name.textContent = "John Smith"
  person1EL.append(person1Name)
  
  const person1Job = document.createElement("p")
  person1Job.textContent = "Restaurant Manager"
  person1EL.append(person1Job)

  const person1Contact = document.createElement("p")
  person1Contact.textContent = "Phone: 1111-1111-1111"
  person1EL.append(person1Contact)

  const person1Image = new Image()
  person1Image.src = Person1
  person1EL.append(person1Image)

  personContainer.append(person1EL)

// Person 2

  const person2EL = document.createElement("div")
  
  const person2Name = document.createElement("h2")
  person2Name.textContent = "Alexa Morley"
  person2EL.append(person2Name)
  
  const person2Job = document.createElement("p")
  person2Job.textContent = "Restaurant Vice-Manager"
  person2EL.append(person2Job)

  const person2Contact = document.createElement("p")
  person2Contact.textContent = "Phone: 2222-2222-2222"
  person2EL.append(person2Contact)

  const person2Image = new Image()
  person2Image.src = Person2
  person2EL.append(person2Image)

  personContainer.append(person2EL)

  // Person 3

  const person3EL = document.createElement("div")
  
  const person3Name = document.createElement("h2")
  person3Name.textContent = "Sam Wynn"
  person3EL.append(person3Name)
  
  const person3Job = document.createElement("p")
  person3Job.textContent = "Night Events Organizer"
  person3EL.append(person3Job)

  const person3Contact = document.createElement("p")
  person3Contact.textContent = "Phone: 3333-3333-3333"
  person3EL.append(person3Contact)

  const person3Image = new Image()
  person3Image.src = Person3
  person3EL.append(person3Image)

  personContainer.append(person3EL)

  // Person 4

  const person4EL = document.createElement("div")
  
  const person4Name = document.createElement("h2")
  person4Name.textContent = "Ariadne Choi"
  person4EL.append(person4Name)
  
  const person4Job = document.createElement("p")
  person4Job.textContent = "Events Organizer"
  person4EL.append(person4Job)

  const person4Contact = document.createElement("p")
  person4Contact.textContent = "Phone: 4444-4444-4444"
  person4EL.append(person4Contact)

  const person4Image = new Image()
  person4Image.src = Person4
  person4EL.append(person4Image)

  personContainer.append(person4EL)

  // 

  contactEL.append(personContainer)



  return contactEL
}

nav()
changeSection(hero)
footer()
