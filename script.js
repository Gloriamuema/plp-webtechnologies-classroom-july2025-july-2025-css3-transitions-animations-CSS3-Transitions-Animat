// =====================================================
// Part 2: Functions, Parameters, and Return Values
// =====================================================

// Global variable
let defaultColor = "#0ba29d";

/**
 * Function to change background color
 * @param {string} color
 * @returns {string} message
 */
function changeBackgroundColor(color) {
  document.body.style.background = color;
  return `✅ Background changed to ${color}`;
}

/**
 * Function to preview color live
 * @param {string} color
 */
function previewColor(color) {
  const preview = document.getElementById("colorPreview");
  preview.style.backgroundColor = color || "white";
}

// =====================================================
// DOM Interactions & Events
// =====================================================

// Animate the box
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate"); // Works now
});

// Color changer with live preview
const colorInput = document.getElementById("colorInput");
const colorBtn = document.getElementById("colorBtn");

colorInput.addEventListener("input", () => {
  previewColor(colorInput.value.trim());
});

colorBtn.addEventListener("click", () => {
  const color = colorInput.value.trim() || defaultColor;
  const message = changeBackgroundColor(color);
  alert(message);
});

// =====================================================
// Modal Popup
// =====================================================
const modal = document.getElementById("modal");
const showModal = document.getElementById("showModal");
const closeModal = document.getElementById("closeModal");

showModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 500);
});
