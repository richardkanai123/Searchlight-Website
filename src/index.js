// toggler operation for nav on small screens
const Toggler = document.querySelector(".toggler");
const nav = document.querySelector("nav");

Toggler.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    Toggler.innerHTML = `
        <i class="bi bi-x"></i>
    `;
  } else {
    Toggler.innerHTML = `
        <i class="bi bi-list"></i>
    `;
  }
});

// closes nav after user presses  menu
nav.addEventListener("click", (e) => {
  if (nav.classList.contains("open")) {
    console.log(e.target);
    // nav.classList.remove("open");
    setTimeout(() => {
      nav.classList.remove("open");
      Toggler.innerHTML = `
        <i class="bi bi-list"></i>
    `;
    }, 500);
  }
});
