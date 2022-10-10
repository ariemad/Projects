import "./style.scss";
import MyImage4 from "./img/fish.jpg";
import MyImage2 from "./img/drinks-sushi.jpg";
import MyImage3 from "./img/friends-sushi.jpg";
import MyImage from "./img/restaurant.jpg";
import LocationImage from "./img/location.jpg"

function nav() {
  const navEl = document.querySelector("nav")

  const textHomeEL = document.createElement("a")
  textHomeEL.textContent = "Home"
  navEl.append(textHomeEL)
  textHomeEL.addEventListener("click", e => {
    alert("Hi")
  })

    const textMenuEL = document.createElement("a")
  textMenuEL.textContent = "Menu"
  navEl.append(textMenuEL)

    const textContactEL = document.createElement("a")
  textContactEL.textContent = "Contact"
  navEl.append(textContactEL)


  
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

const contentContainer = document.getElementById("content-container");

nav()
contentContainer.append(hero());
footer()
