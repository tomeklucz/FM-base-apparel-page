"use strict";

// variables
const emailInputField = document.querySelector(".email-input");
const errorMessage = document.querySelector(".message-error");
const errorMessageText = "Please provide a valid email";
const successMessage = document.querySelector(".message-success");
const successMessageText = "Email send successfully!";
const errorIcon = document.querySelector(".error-icon");
const submitBtn = document.querySelector(".submit-btn");

// email pattern
const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

// submit event listener
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userInput = emailInputField.value;

  checkEmail(userInput, emailRegex);
});

// additional functions
const checkEmail = function (email, pattern) {
  clearMessages();
  !email.match(pattern) ? viewError() : viewSuccess();
};

const clearMessages = function () {
  emailInputField.classList.remove("email-input-error");
  errorMessage.classList.add("hidden");
  errorIcon.classList.add("hidden");
  successMessage.classList.add("hidden");
};

const viewError = function () {
  emailInputField.classList.add("email-input-error");
  errorMessage.innerHTML = errorMessageText;
  errorMessage.classList.remove("hidden");
  errorIcon.classList.remove("hidden");
};

const viewSuccess = function () {
  successMessage.classList.remove("hidden");
  successMessage.innerHTML = successMessageText;
};
