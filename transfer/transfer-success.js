const params = new URLSearchParams(window.location.search);
document.getElementById("display-name").textContent = params.get("name");
document.getElementById("display-account").textContent = params.get("account");
document.getElementById("display-amount").textContent = params.get("amount");