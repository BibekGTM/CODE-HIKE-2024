loginBtn = document.getElementById("loginBtn");
usernameBtn = document.getElementById("usernameBtn");
passwordBtn = document.getElementById("passwordBtn");
forgotPassword = document.getElementById("forgotPassword");


loginBtn.onclick = function() {
  if(usernameBtn.value == "BibekGTM" && passwordBtn.value == "password") {
    window.location = "home.html";
  }
  else {
    document.getElementById("wrongPassword").textContent = "Invalid Username or Password";
  }
}
