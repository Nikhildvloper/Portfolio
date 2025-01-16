const texts = ["a Web Developer", "an App Developer", "an AI Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    if (!isDeleting && index === 0) {
        currentText = texts[count];
    }

    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.querySelector(".typing").textContent = letter;

    let typeSpeed = isDeleting ? 100 : 200;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
    }

    setTimeout(type, typeSpeed);
})();
