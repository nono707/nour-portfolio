AOS.init();


const text = "IT Student | Web Developer | Mobile App Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML = text.substring(0, i + 1);
        i++;
        setTimeout(typing, 50);
    }
}
typing();


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    fetch("https://formspree.io/f/xeerbdjj", {
        method: "POST",
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("successMsg").classList.remove("d-none");
            this.reset();
        }
    });
});