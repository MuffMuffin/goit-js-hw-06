const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(
      "Login failed:\nPlease fill out both e-mail AND password fields!"
    );
  }

  console.log(`User mail: ${email.value}\nUser password: ${password.value}`);
  event.currentTarget.reset();
});
