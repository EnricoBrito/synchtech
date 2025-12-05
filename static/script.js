const header = document.getElementById("header");
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

mobileToggle.onclick = () => {
  mobileNav.classList.toggle("open");
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    const headerOffset = header.offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

const words = [
  "Sites que atraem clientes.",
  "Sistemas que destravam processos.",
  "Automações que economizam tempo.",
  "Marketing que impulsiona vendas.",
  "Facilidade no dia a dia.",
  "Mais clientes, menos esforço.",
  "Mais lucro, menos gasto.",
  "Fluxos que aceleram o negócio.",
  "Resultados imediatos.",
  "Digital que funciona.",
  "Crescimento sem travar.",
  "Processos inteligentes.",
  "Estratégia que converte.",
  "Negócios no automático.",
  "Tecnologia que resolve.",
  "Valorização do seu tempo.",
  "Sistemas que impulsionam."
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 90;
const deleteSpeed = 65;
const delayBetweenWords = 1200;

function typewriter() {
  const display = document.getElementById("typewriter");
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    charIndex++;
    display.textContent = currentWord.slice(0, charIndex);
  } else {
    charIndex--;
    display.textContent = currentWord.slice(0, charIndex);
  }
  let speed = isDeleting ? deleteSpeed : typeSpeed;
  if (!isDeleting && charIndex === currentWord.length) {
    speed = delayBetweenWords;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }
  setTimeout(typewriter, speed);
}

setTimeout(typewriter, 1800);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".service-card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all .6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200 + i * 120);
  });

  document.querySelectorAll(".course-card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all .6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 200 + i * 120);
  });
});

document.querySelectorAll(".course-card").forEach(card => {
  card.addEventListener("mousemove", () => card.style.transition = "0s");
  card.addEventListener("mouseleave", () => card.style.transition = ".25s ease");
});

document.querySelectorAll(".benefit-card").forEach(card => {
  card.addEventListener("mouseenter", () => card.style.transform = "translateY(-2px)");
  card.addEventListener("mouseleave", () => card.style.transform = "translateY(0)");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.querySelector('input[name="name"]').value.trim();
  const telefone = form.querySelector('input[name="telefone"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !telefone || !message) return;

  await fetch("https://developersync.app.n8n.cloud/webhook/form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, telefone, message })
  });

  form.reset();

});
