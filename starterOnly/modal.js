// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
//DOM Elements (Aissa)
const form = document.forms['reserve'];
const firstname= document.getElementById("first");
const lastname=document.getElementById("last");
const email=document.getElementById("email");
const birthdate=document.getElementById("birthdate");
const quantity=document.getElementById("quantity");
const locationChoices = document.querySelectorAll('input[name="location"]');
const termsAccepted = document.getElementById("checkbox1");

const locationdiv=document.querySelector(".location-container")



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Add event listener to close modal[Aissa]
closeModalBtn.addEventListener("click", closeModal);



// Close modal function [Aissa]
function closeModal() {
modalbg.style.display = "none";
}


// Toggles responsive mode for the navigation menu 
function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.classname === "topnav") {
    x.classname += " responsive";
  } else {
    x.classname = "topnav";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche la soumission par défaut

  let isValid = true;

  // Validation du prénom
  if (firstname.value.trim().length < 2) {
    displayError(firstname, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    isValid = false;
  } else {
    removeError(firstname);
  }

  // Validation du nom
  if (lastname.value.trim().length < 2) {
    displayError(lastname, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    isValid = false;
  } else {
    removeError(lastname);
  }

  // Validation de l'email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    displayError(email, "Veuillez entrer une adresse email valide");
    isValid = false;
  } else {
    removeError(email);
  }
  
 // Validation de la date de naissance
  if (birthdate.value === "") {
    displayError(birthdate, "Vous devez entrer votre date de naissance.");
    isValid = false;
  } else {
    const today = new Date();
    const birthDate = new Date(birthdate.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    
    // Calcul de l'âge basé sur l'anniversaire
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (age < 18) {
      displayError(birthdate, "Vous devez avoir au moins 18 ans");
      isValid = false;
    } else {
      removeError(birthdate);
    }
  }
  // Validation de la quantité
  if (isNaN(quantity.value) || quantity.value === "") {
    displayError(quantity, "Veuillez entrer un nombre valide");
    isValid = false;
  } else {
    removeError(quantity);
  }



  // Validation des villes
  let citySelected = false;
  for (let i = 0; i < locationChoices.length; i++) {
    if (locationChoices[i].checked) {
      citySelected = true;
      break;
    }
  }

  if (!citySelected) {
    displayErrorradio(locationdiv, "Vous devez choisir une option");
    isValid = false;
  } else {
    removeErrorradio(locationdiv);
  }


  // Validation des conditions générales
  if (!termsAccepted.checked) {
    displayError(termsAccepted, "Vous devez vérifier que vous acceptez les termes et conditions.");
    isValid = false;
  } else {
    removeError(termsAccepted);
  }

  // Si tout est valide, soumettre le formulaire
  if (isValid) {
    form.submit();
  }
});

// Fonction pour afficher les erreurs
function displayError(element, message) {
  element.parentElement.setAttribute("data-error", message);
  element.parentElement.setAttribute("data-error-visible", "true");
}

// Fonction pour retirer les erreurs
function removeError(element) {
  element.parentElement.removeAttribute("data-error");
  element.parentElement.removeAttribute("data-error-visible");
}


// Fonction pour afficher les erreurs pour radio
function displayErrorradio(element, message) {
  element.setAttribute("data-error", message);
  element.setAttribute("data-error-visible", "true");
}

// Fonction pour retirer les erreurs pour radio
function removeErrorradio(element) {
  element.removeAttribute("data-error");
  element.removeAttribute("data-error-visible");
}