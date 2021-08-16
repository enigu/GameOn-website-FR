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
const errorElement = document.getElementById("error");
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

//function checkForm(form){

form.addEventListener('submit', (e) => {
  let messages = []

  if (firstName.value === '' || firstName.value == null) {
    messages.push("Prénom obligatoire")
  }

  if (firstName.value.length <= 2) {
    messages.push("Le prénom doit être plus long que 2 caractères")
  }

  if (lastName.value === '' || lastName.value == null) {
    messages.push("Nom de famille obligatoire")
  }

  if (lastName.value.length <= 2) {
    messages.push("Le nom de famille doit être plus long que 2 caractères")
  }

  if(email.value === '' || email.value == null) {
    messages.push("Adresse email invalide")
  }

  if(quantity.value == '') {
    messages.push("Veuillez cocher la case nombre de tournoi")
  }

  if(location1.checked == false && location2.checked == false && location3.checked == false && location4.checked == false && location5.checked == false && location6.checked == false) {
    messages.push("Veuillez cocher une ville")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  else {
    messages.push("Merci ! Votre réservation a été reçue.")
  }
})
//messages.push("Merci ! Votre réservation a été reçue.")
//}



