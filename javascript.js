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

// regenerate password on checkbox press
var letter_check = document.querySelector("#letters");
var digits_check = document.querySelector("#digits");
var symbols_check = document.querySelector("#symbols");
letter_check.addEventListener("change", function() {
    if (this.checked) {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    } else {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    }
})
digits_check.addEventListener("change", function() {
    if (this.checked) {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    } else {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    }
})
symbols_check.addEventListener("change", function() {
    if (this.checked) {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    } else {
        let displayCheck = document.querySelector("#password");
        displayCheck.innerHTML = generate_password()
    }
})

// require letters or digits checkbox to be checked
function enable_letters() {
    document.getElementById("letters").disabled = false;
}
function disable_letters() {
    document.getElementById("letters").disabled = true;
}
function enable_digits() {
    document.getElementById("digits").disabled = false;
}
function disable_digits() {
    document.getElementById("digits").disabled = true;
}

letter_check.addEventListener("change", function(){
    if (this.checked) {
        let enableLetters = document.querySelector("#letters");
        enableLetters.innerHTML = enable_digits();
    } else {
        let enableLetters = document.querySelector("#letters");
        enableLetters.innerHTML = disable_digits();
    }
})
digits_check.addEventListener("change", function(){
    if (this.checked) {
        let enableDigits = document.querySelector("#digits");
        enableDigits.innerHTML = enable_letters();
    } else {
        let enableDigits = document.querySelector("#digits");
        enableDigits.innerHTML = disable_letters();
    }
})

// show slider amount and regenerate password based on length
function showAmount(newAmount) {
    document.getElementById("amount").innerHTML = newAmount;
    document.getElementById("password").innerHTML = generate_password(newAmount);
}
const checkbox = document.querySelector("#letters");
console.log(checkbox.checked)

// copy password button
const copy_button = document.querySelector("#copy-button");
// change button to say `copied` and revert back
copy_button.addEventListener("click", function(){
    let showCopied = document.querySelector("#copy-button");
    showCopied.innerHTML = `Copied!`;
    const myTimeout = setTimeout(revert, 800);
    function revert() {
        let revertCopy = document.querySelector("#copy-button");
        revertCopy.innerHTML = `Copy password`
    }
})