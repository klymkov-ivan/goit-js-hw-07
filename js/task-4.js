const loginForm = document.querySelector(".login-form");

let userInfo = {};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  userInfo = { email, password };
  console.log(userInfo);

  loginForm.reset();
});
