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
    let passStrength = document.querySelector("#strength-detector")
    // change color and strength based on range length and password strength
    if (6 < newAmount < 9) {
        document.body.style.background = "#BE4E3A";
        passStrength.innerHTML = `<i class="fa-solid fa-circle-minus"></i> Fairly strong password`;
    }
    if (newAmount < 7) {
        document.body.style.background = "#D1364E";
        passStrength.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Weak password`;
    }
    if (newAmount > 8) {
        document.body.style.background = "#1C815A";
        passStrength.innerHTML = `<i class="fa-solid fa-circle-check"></i> Strong password`;
    }
}

// copy password button - change button to say `copied` and revert back
const copy_button = document.querySelector("#copy-button");
copy_button.addEventListener("click", function() {
    let showCopied = document.querySelector("#copy-button");
    showCopied.innerHTML = `Copied!`;
    const myTimeout = setTimeout(revert, 800);
    function revert() {
        let revertCopy = document.querySelector("#copy-button");
        revertCopy.innerHTML = `Copy password`
    }
})

// copy password to clipboard on click copy button
function copyToClipboard() {
    const str = document.getElementById('password').innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
