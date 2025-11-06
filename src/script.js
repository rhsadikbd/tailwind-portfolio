let modal_overlay = document.querySelector("#modal_overlay");
let modal_right_open = document.querySelector("#modal_right_open");
function showInfoModal() {
  modal_overlay.classList.remove("invisible", "opacity-0");
  modal_right_open.classList.remove("translate-x-full");
}
function hideInfoModal() {
  modal_right_open.classList.add("translate-x-full");
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
// const openBtn = document.getElementById("openModalBtn");
// const closeBtn = document.getElementById("closeModalBtn");
// const closeBtn2 = document.getElementById("closeModalBtn2");
// const overlay = document.getElementById("modalOverlay");
// const modal = document.getElementById("rightModal");

// function openModal() {
//   overlay.classList.remove("opacity-0", "invisible");
//   overlay.classList.add("opacity-100", "visible");
//   modal.classList.remove("translate-x-full");
//   modal.classList.add("translate-x-0");
// }

// function closeModal() {
//   overlay.classList.add("opacity-0", "invisible");
//   overlay.classList.remove("opacity-100", "visible");
//   modal.classList.add("translate-x-full");
//   modal.classList.remove("translate-x-0");
// }

// openBtn.addEventListener("click", openModal);
// closeBtn.addEventListener("click", closeModal);
// closeBtn2.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// let dialog = document.getElementById("dialog");
// let innerDialog = document.getElementById("inner_dialog");
// function showDialog() {
//   dialog.classList.remove("invisible");
//   setTimeout(() => {
//     dialog.classList.remove("opacity-0");
//     innerDialog.classList.remove("translate-x-full");
//   }, 300);
// }
