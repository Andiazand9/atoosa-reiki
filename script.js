document.getElementById("year").textContent = new Date().getFullYear();

// Header background on scroll
const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 40);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
document.getElementById("mainNav").addEventListener("click", (e) => {
  if (e.target.tagName === "A") header.classList.remove("nav-open");
});

// Contact form — this is a static site with no backend, so this opens
// the visitor's email client pre-filled. Swap for a service like
// Formspree, Basin, or Netlify Forms if this ever moves off a plain
// GitHub Pages host.
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  const subject = encodeURIComponent(`New message from ${name} via Atoosa Reiki site`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  // TODO: replace this address with Atoosa's real email
  window.location.href = `mailto:hello@atoosareiki.com?subject=${subject}&body=${body}`;

  note.textContent = "Opening your email app to send this…";
});
