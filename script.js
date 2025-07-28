const navbar = document.getElementById('navbar');
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    popupMessage.textContent = `Thank you, ${name}, for contacting AutoFix! We'll reach out soon.`;
    popup.style.display = 'block';
    form.reset();
});

function closePopup() {
    popup.style.display = 'none';
}