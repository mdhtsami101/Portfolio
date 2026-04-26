// Scroll Animation with Intersection Observer
const observerOptions = {
   threshold: 0.1,
   rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
         
         // Stagger children if it's a grid
         if (entry.target.classList.contains('skills-grid') || entry.target.classList.contains('projects-container')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
               child.style.transitionDelay = `${index * 0.1}s`;
               child.classList.add('show');
            });
         }
      }
   });
}, observerOptions);

document.querySelectorAll('.hidden, .skills-grid, .projects-container').forEach(el => observer.observe(el));


// Advanced Typing Effect
const typingText = document.querySelector(".typing");
const phrases = ["Flutter Developer", "Clean Architecture Expert", "UI/UX Enthusiast", "Mobile App Specialist"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
   const currentPhrase = phrases[phraseIndex];
   
   if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
   } else {
      typingText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
   }

   if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end
   } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
   }

   setTimeout(type, typeSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', type);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

function toggleMenu() {
   nav.classList.toggle('active');
   const icon = menuToggle.querySelector('i');
   icon.classList.toggle('fa-bars');
   icon.classList.toggle('fa-times');
}

function closeMenuDrawer() {
   nav.classList.remove('active');
   const icon = menuToggle.querySelector('i');
   icon.classList.add('fa-bars');
   icon.classList.remove('fa-times');
}

menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', closeMenuDrawer);

navLinks.forEach(link => {
   link.addEventListener('click', closeMenuDrawer);
});

// Preloader
window.addEventListener('load', () => {
   const loader = document.getElementById('loader');
   setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 800);
   }, 1000);
});

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
   const posX = e.clientX;
   const posY = e.clientY;

   cursorDot.style.left = `${posX}px`;
   cursorDot.style.top = `${posY}px`;

   cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
   }, { duration: 500, fill: "forwards" });
});

// Cursor hover effect
const interactables = document.querySelectorAll("a, .btn, .card, .skill-box, #menuToggle, #closeMenu");
interactables.forEach(el => {
   el.addEventListener("mouseenter", () => {
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursorOutline.style.backgroundColor = "var(--primary-glow)";
      cursorOutline.style.border = "none";
   });
   el.addEventListener("mouseleave", () => {
      cursorOutline.style.transform = "translate(-50%, -50%) scale(1)";
      cursorOutline.style.backgroundColor = "transparent";
      cursorOutline.style.border = "2px solid var(--primary-glow)";
   });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
   const header = document.querySelector('header');
   if (window.scrollY > 50) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
});

// Simple parallax for background blobs
document.addEventListener('mousemove', (e) => {
   const x = e.clientX / window.innerWidth;
   const y = e.clientY / window.innerHeight;
   
   const blobs = document.querySelectorAll('.blob');
   blobs.forEach((blob, index) => {
      const speed = (index + 1) * 20;
      blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
   });
});