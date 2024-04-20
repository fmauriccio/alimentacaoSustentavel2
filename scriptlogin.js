function fazerLogin() {
  var emailInput = document.getElementById("emailInput");
  var passwordInput = document.getElementById("passwordInput");
  var email = emailInput.value;
  var password = passwordInput.value;
  
  if (!email.includes("@") || !email.includes(".com")) {
    emailInput.style.outline = "2px solid red";
    return false;
  } else {
    emailInput.style.outline = "";
  }
  
  if (password.length < 4) {
    passwordInput.style.outline = "2px solid red";
    return false;
  } else {
    passwordInput.style.outline = "";
  }

  if (email === "als@gmail.com" && password === "12345") {
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }

  return false;
}
