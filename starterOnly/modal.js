function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeModalBtn.addEventListener('click', function() {
    modalbg.style.display = "none";
  });


// form validation 

const form = document.getElementById("form");
//divs showing error-messages
const errorFirstNameElement = document.getElementById("errorFirstName");
const errorLastNameElement = document.getElementById("errorLastName");
const errorEmailElement = document.getElementById("errorEmail");
const errorBirthDateElement = document.getElementById("errorBirthDate");
const errorQuantityElement = document.getElementById("errorQuantity");
const errorLocationElement = document.getElementById("errorLocation");
const errorConditionElement = document.getElementById("errorConditions");
//modal elements
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById ("location1");
const location2 = document.getElementById ("location2");
const location3 = document.getElementById ("location3");
const location4 = document.getElementById ("location4");
const location5 = document.getElementById ("location5");
const location6 = document.getElementById ("location6");
const checkbox1 = document.getElementById ("checkbox1");
const submitButton = document.getElementById ("submit")

//confirmation in case of successful booking
const confirmation = document.getElementById("confirmation");

//event listener sur le bouton submit
form.addEventListener('submit', (e) => {
  
  //array counting error messages
  let messages = []

  //check first name, if not ok show error message and push error in array for counting

  if (firstName.value === '' || firstName.value == null || firstName.value.length <= 2) {
    errorFirstNameElement.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    messages.push("error");
  }

  //check last name

  if (lastName.value === '' || lastName.value == null || lastName.value.length <= 2) {
    errorLastNameElement.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    messages.push("error");
  }

  //check email

  if(email.value === '' || email.value == null) {
    errorEmailElement.innerHTML = "Veuillez entrer un email valide.";
    messages.push("error");
  }

  //check birthdate

  if(birthdate.value === '' || birthdate.value == null) {
    errorBirthDateElement.innerHTML = "Veuillez entrer votre date de naissance.";
    messages.push("error");
  }

  //check participation to former competitions 

  if(quantity.value == '') {
    errorQuantityElement.innerHTML = "Veuillez indiquer le nombre de tournoi.";
    messages.push("error");
  }

  //check location

  if(location1.checked == false && location2.checked == false && location3.checked == false && location4.checked == false && location5.checked == false && location6.checked == false) {
    errorLocationElement.innerHTML = "Veuillez cocher une ville.";
    messages.push("error");
  }

  //check conditions acceptation

  if(checkbox1.checked == false) {
    errorConditionElement.innerHTML = "Veuillez accepter les conditions d'utilisation.";
    messages.push("error");
  }

  //Check error-messages and submit conditions

  //If no error messages in the messages array, submit form

  if (messages.length == 0) {
    confirmation.innerHTML = "Merci! Votre réservation a été reçue.";
     e.preventDefault();
  } 

  //if error-messages counted in the array prevent form from submitting
  else {
    e.preventDefault() 
  }
})




