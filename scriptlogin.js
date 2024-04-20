function fazerLogin() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var email = email.value;
  var password = password.value;
  
  if (!email.includes("@") || !email.includes(".com")) {
    email.style.outline = "2px solid red";
    return false;
  } else {
    email.style.outline = "";
  }
  
  if (password.length < 4) {
    password.style.outline = "2px solid red";
    return false;
  } else {
    password.style.outline = "";
  }

  if (email === "als@gmail.com" && password === "12345") {
    window.location.href = "home.html";
  } else {
    alert("E-mail ou senha incorretos. Por favor, tente novamente.");
  }

  return false;
}
