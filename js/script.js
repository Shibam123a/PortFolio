document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
  });
});
const roles = [
  "Web Developer",
  "Python Programmer",
  "Flask Developer",
  "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 1200);
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

document.addEventListener("DOMContentLoaded", typeEffect);


const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

const animateSkills = () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    progressBars.forEach(bar => {
      bar.style.width = bar.classList.contains("c") ? "85%" :
                        bar.classList.contains("python") ? "80%" :
                        bar.classList.contains("java") ? "70%" :
                        bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "75%" :
                        bar.classList.contains("flask") ? "70%" :
                        bar.classList.contains("osm") ? "75%" :
                        bar.classList.contains("weather") ? "70%" :
                        bar.classList.contains("git") ? "80%" : "0%";
    });
  }
};

window.addEventListener("scroll", animateSkills);

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  alert("Thank you! Your message has been sent.");

  event.target.reset();
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_i4akncu",
    "service_i4akncu",
    this
  ).then(() => {
    alert("Message sent successfully!");
    this.reset();
  }, (error) => {
    alert("Failed to send message");
    console.error(error);
  });
});

