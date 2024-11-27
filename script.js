let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Keisti nuotrauką kas 3 sekundes
setInterval(changeSlide, 3000);


// Formos siuntimas
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Neleisti formos siuntimo be tikrinimo

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Ačiū už žinutę, mes su jumis susisieksime!');
        // Čia galėtų būti kodas, kuris siunčia duomenis į serverį.
    } else {
        alert('Prašome užpildyti visus laukus!');
    }
});

