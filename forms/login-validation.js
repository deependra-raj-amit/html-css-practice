document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".login-form");
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      const users = JSON.parse(localStorage.getItem("safeBankUsers")) || [];
  
      const matchedUser = users.find(
        user => user.email === email.value && user.password === password.value
      );
  
      if (matchedUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    
        window.location.href = "../displayTypes/displaytypes.html";
      } else {
        alert("Invalid email or password.");
      }
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  