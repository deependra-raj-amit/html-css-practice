document.getElementById("transfer-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("receiver-name").value.trim();
    const account = document.getElementById("receiver-accountNumber").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim());

    if (!name || !account || isNaN(amount) || amount < 1) {
        alert("Please fill all fields correctly. Amount should be at least ₹1.");
        return;
    }

    const queryParams = new URLSearchParams({
        name: name,
        account: account,
        amount: amount.toFixed(2)
    });

    window.location.href = `transfer-success.html?${queryParams.toString()}`;
});
