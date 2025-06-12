const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const mainLogo = document.getElementById('main-logo');
const faviconDark = document.getElementById('favicon-dark');
const faviconLight = document.getElementById('favicon-light');

function setTheme(theme) {
    // Update <body> class
    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
    // Update main logo
    if (mainLogo) mainLogo.src = (theme === 'light') ? 'assets/bisg-dark.png' : 'assets/bisg-light.png';
    // Update favicon
    if (faviconDark && faviconLight) {
        faviconDark.disabled = (theme === 'light');
        faviconLight.disabled = (theme === 'dark');
    }
    // Update nav theme icon
    if (themeIcon)
        themeIcon.textContent = (theme === 'light') ? '☀️' : '🌙';
    // Save in localStorage
    localStorage.setItem('bis-theme', theme);
}

function getCurrentTheme() {
    return document.body.classList.contains('light-theme') ? 'light' : 'dark';
}

// On page load, set theme from localStorage or default
let savedTheme = localStorage.getItem('bis-theme') || 'dark';
setTheme(savedTheme);

// On toggle click, switch between light/dark
themeToggleBtn.addEventListener('click', () => {
    let newTheme = (getCurrentTheme() === 'dark') ? 'light' : 'dark';
    setTheme(newTheme);
});

// Vanilla JS fetch submit for Formspree (prevents redirect)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if(contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    formStatus.textContent = 'Sending...';

    const formData = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        formStatus.textContent = "Thank you! Your message has been sent.";
        contactForm.reset();
      } else {
        formStatus.textContent = "Oops! There was a problem submitting your form.";
      }
    } catch (error) {
      formStatus.textContent = "Oops! There was a problem submitting your form.";
    }
  });
}

// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if(navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Optional: close menu on navigation click (for one-pagers)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}