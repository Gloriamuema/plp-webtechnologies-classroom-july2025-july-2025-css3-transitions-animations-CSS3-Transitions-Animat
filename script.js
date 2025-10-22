// -------------------------
// Part 2: Functions, Scope, Parameters & Return Values
// -------------------------

// Global variable
let defaultColor = "#4a90e2";

// Function to update background color (uses parameter & return)
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  return `Background color changed to ${color}`;
}

// Event listener for color button
document.getElementById("colorBtn").addEventListener("click", function() {
  const colorInput = document.getElementById("colorInput").value.trim();

  // Local scope variable
  let message;

  if (colorInput) {
    message = changeBackgroundColor(colorInput);
  } else {
    message = changeBackgroundColor(defaultColor);
  }

  alert(message);
});

// -------------------------
// Part 3: Combining CSS + JS
// -------------------------

// Animate box when button is clicked
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// -------------------------
// Modal logic (show/hide with CSS animation)
// -------------------------
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("showModal");
const closeModalBtn = document.getElementById("closeModal");

showModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  // Add fade-out animation before hiding
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 500);
});
