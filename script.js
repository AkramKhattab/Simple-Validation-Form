// Developed by Akram Khattab
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// Adding event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  checkInputs(); // Call function to check inputs
});

// Function to check inputs for validation
function checkInputs() {
  const usernameValue = username.value.trim(); // Trim whitespace from input
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmValue = confirm.value.trim();

  // Check username
  if (usernameValue === "") {
    setError(username, "This field cannot be blank !!!!");
  } else {
    setSuccess(username);
  }

  // Check email
  if (emailValue === "") {
    setError(email, "This field cannot be blank !!!!");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Check the email dude !!!!");
  } else {
    setSuccess(email);
  }

  // Check password
  if (passwordValue === "") {
    setError(password, "This field cannot be blank !!!!");
  } else if (passwordValue.length <= 4) {
    setError(password, "Password is too small!!");
  } else {
    setSuccess(password);
  }

  // Check confirm password
  if (confirmValue === "") {
    setError(confirm, "This field cannot be blank !!!!");
  } else if (passwordValue !== confirmValue) {
    setError(confirm, "Dude ! Password and Confirm Password must be same.");
  } else {
    setSuccess(confirm);
  }
}

// Function to set error state
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

// Function to set success state
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Function to validate email format
function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
