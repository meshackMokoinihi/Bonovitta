const text = "Bonovitta Business Solutions";
const typingSpeed = 100; // milliseconds per character
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, typingSpeed);
    }
}

window.onload = typeText;
