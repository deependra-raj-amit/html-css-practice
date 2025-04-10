document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");
    const fullName = document.getElementById("signup-name");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const checkbox = form.querySelector("input[type='checkbox']");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      if (fullName.value.trim() === "") {
        alert("Please enter your full name.");
        return;
      }
  
      if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
  
      if (!checkbox.checked) {
        alert("You must agree to the terms and conditions.");
        return;
      }
  
      
      // Getting current users from localStorage
    let users = JSON.parse(localStorage.getItem("safeBankUsers")) || [];

    // Checking if user already exists
    const userExists = users.some(user => user.email === email.value);
    if (userExists) {
      alert("User already exists with this email.");
      return;
    }

   
    const newUser = {
      fullName: fullName.value,
      email: email.value,
      password: password.value
    };

    
    users.push(newUser);

    localStorage.setItem("safeBankUsers", JSON.stringify(users));

    //alert("Sign up successful!");
    window.location.href = "../displayTypes/displaytypes.html";
  });


    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  