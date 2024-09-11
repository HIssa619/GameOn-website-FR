const modalBackground = document.querySelector(".bground");
const closeModalButton = document.querySelector(".close");
const conditionsAcceptedCheckbox = document.querySelector("#checkbox1");
const submitButton = document.querySelector(".btn-submit");
const firstNameInput = document.querySelector("#first");
const lastNameInput = document.querySelector("#last");
const emailInput = document.querySelector("#email");
const birthdateInput = document.querySelector("#birthdate");
const quantityInput = document.querySelector("#quantity");
const modalButtons = document.querySelectorAll(".modal-btn");
const formInputs = document.querySelectorAll(".formData");
const location1 = document.querySelector("#location1");
const form = document.querySelector("form");

if (form == null) throw new Error("No form found");
if (conditionsAcceptedCheckbox == null) throw new Error("No checkbox found");
if (location1 == null) throw new Error("No location1 found");
if (lastNameInput == null) throw new Error("No lastNameInput inputs found");
if (emailInput == null) throw new Error("No emailInput inputs found");
if (birthdateInput == null) throw new Error("No birthdateInput inputs found");
if (firstNameInput == null) throw new Error("No firstNameInput inputs found");
if (closeModalButton == null) throw new Error("No close button found");

firstNameInput.addEventListener("invalid", flashErrorMessage);
lastNameInput.addEventListener("invalid", flashErrorMessage);
emailInput.addEventListener("invalid", flashErrorMessage);
birthdateInput.addEventListener("invalid", flashErrorMessage);
location1.addEventListener("invalid", flashErrorMessage);
conditionsAcceptedCheckbox.addEventListener("invalid", flashErrorMessage);

form.addEventListener("submit", handleSubmit);

modalButtons.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalButton.addEventListener("click", closeModal);

function handleSubmit() {
  if (form == null) throw new Error("No form found");
  if (form.checkValidity()) {
    closeModal();
    alert("Merci ! Votre réservation a été reçue.");
  }
}

function flashErrorMessage(event) {
  const target = event.target;
  const parent = target.parentElement;
  parent.setAttribute("data-error-visible", "true");
  setTimeout(removeErrorMessages, 10000);
}

function removeErrorMessages() {
  const errorMessages = document.querySelectorAll("[data-error]");
  errorMessages.forEach((errorMessage) => {
    errorMessage.removeAttribute("data-error-visible");
  });
}

function closeModal() {
  if (modalBackground == null) throw new Error("No modal background found");
  modalBackground.classList.remove("active");
}

function launchModal() {
  if (modalBackground == null) throw new Error("No modal background found");
  modalBackground.classList.add("active");
}

function editNav() {
  const topNavbar = document.getElementById("myTopnav");
  if (topNavbar == null) throw new Error("No topnav found");
  topNavbar.classList.toggle("responsive");
}