// generate password
function generate_password(length) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    var length = document.getElementById("slider").value;
    while (counter < length) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return password
}

// display password
window.onload = function display_password(event) {
    event.preventDefault();
    let displayPassword = document.querySelector("#password");
    displayPassword.innerHTML = generate_password();
}

// regenerate password on button press
function regenerate(event) {
    event.preventDefault();
    let displayRegenerate = document.querySelector("#password");
    displayRegenerate.innerHTML = generate_password()
}
let regenerate_button = document.querySelector("#regenerate-button");
regenerate_button.addEventListener("click", regenerate);

// show slider amount
function showAmount(newAmount) {
    document.getElementById("amount").innerHTML = newAmount;
}