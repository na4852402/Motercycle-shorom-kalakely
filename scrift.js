
document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let quantity = Number(document.getElementById("quantity").value);

    let price = 800;
    let total = quantity * price;

    document.getElementById("message").innerHTML =
        "Thank you " + name +
        "! Your booking request has been received. " +
        "Tickets: " + quantity +
        " | Total: Rs. " + total;
});
