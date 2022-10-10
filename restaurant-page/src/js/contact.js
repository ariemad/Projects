import Person1 from "./img/contact/Portrait_Placeholder.png"
import Person2 from "./img/contact/Portrait_Placeholder.png"
import Person3 from "./img/contact/Portrait_Placeholder.png"
import Person4 from "./img/contact/Portrait_Placeholder.png"


export function contact(){
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
  