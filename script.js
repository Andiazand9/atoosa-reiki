document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow/opacity state on scroll
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

// Contact form — submits to Formspree (see README for setup) so it
// works on a static GitHub Pages site with no backend of its own.
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  note.textContent = "Sending…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      note.textContent = "Thank you — your message has been sent. Atoosa will get back to you soon.";
      form.reset();
    } else {
      note.textContent = "Something went wrong sending that. Please try again, or email atoosareiki@gmail.com directly.";
    }
  } catch (err) {
    note.textContent = "Something went wrong sending that. Please try again, or email atoosareiki@gmail.com directly.";
  } finally {
    submitBtn.disabled = false;
  }
});
