document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("user-name");
    const emailSpan = document.getElementById("user-email");
  
    // Reading logged-in user from localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
  
    if (user && user.fullName) {
      nameSpan.textContent = user.fullName;
      emailSpan.textContent = user.email;
    } else {
      nameSpan.textContent = "Guest";
      alert("No user logged in.");
      // redirect to login page:
      // window.location.href = "../login.html";
    }
  });
