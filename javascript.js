// generate password
function generate_password(length) {
    let password = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    length = 16;
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

// show slider amount
function showAmount(newAmount) {
    document.getElementById("amount").innerHTML = newAmount;
}