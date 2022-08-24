const form = document.querySelector("form");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");
const change = document.getElementById("change");
const label = document.getElementById("label");
let check = true;

change.addEventListener("click", (e) => {
  if (check) {
    e.target.textContent = "Use email instead";
    label.textContent = "Enter username";
    label.setAttribute("for", "name");
    emailInput.setAttribute("type", "text");
    emailInput.setAttribute("id", "name");
    check = false;
  } else {
    e.target.textContent = "Use username instead";
    label.textContent = "Enter email";
    label.setAttribute("for", "email");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    check = true;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  console.log(emailInput.value, passwordInput.value);
  if (emailInput.getAttribute("type") === "text") {
    if (
      emailInput.value === user.name &&
      passwordInput.value === user.password
    ) {
      window.location.href =
        "file:///Users/emilabdulxaliqov/Hello/login/index.html";
    } else {
      error.textContent = "Adiniz veya Kodunuz sehvdir";
      error.style.color = "red";
    }
  } else {
    if (
      emailInput.value === user.email &&
      passwordInput.value === user.password
    ) {
      window.location.href =
        "file:///Users/emilabdulxaliqov/Hello/login/index.html";
    } else {
      error.textContent = "Email veya Kodunuz sehvdir";
      error.style.color = "red";
    }
  }
});
