let modal_overlay = document.querySelector("#modal_overlay");
let modal_right_open = document.querySelector("#modal_right_open");
function showInfoModal() {
  modal_overlay.classList.remove("invisible", "opacity-0");
  modal_right_open.classList.remove("translate-x-[-250px]");
}
function hideInfoModal() {
  modal_right_open.classList.add("translate-x-[-250px]");
  modal_overlay.classList.add("opacity-0");
  setTimeout(() => {
    modal_overlay.classList.add("invisible");
  }, 500);
}
modal_overlay.addEventListener("click", (e) => {
  if (!modal_right_open.contains(e.target)) {
    hideInfoModal();
  }
});

// === Typed JS
var typed = new Typed("#typed", {
  strings: [
    "Software Engineer",
    "Front End Developer",
    "Wordpress Developer",
    "Web Designer",
    "Freelancer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 200,
  startDelay: 1000,
  loop: true,
});
