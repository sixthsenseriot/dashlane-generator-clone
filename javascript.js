// generate password
function generate_password(length) {
    let password = '';
    var characters = '';
    // generate if checkbox
    const letter_checkbox = document.querySelector("#letters");
    const digits_checkbox = document.querySelector("#digits");
    const symbols_checkbox = document.querySelector("#symbols");
    if (letter_checkbox.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } if (digits_checkbox.checked) {
        characters += '0123456789';
    } if (symbols_checkbox.checked) {
        characters += '!?@#$&';
    }
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

// show slider amount and regenerate password based on length
function showAmount(newAmount) {
    document.getElementById("amount").innerHTML = newAmount;
    document.getElementById("password").innerHTML = generate_password(newAmount);
}

const checkbox = document.querySelector("#letters");
console.log(checkbox.checked)