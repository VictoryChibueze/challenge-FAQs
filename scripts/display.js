"use strict";

const iconEl = document.querySelector(".icon");
const paragraphEl = document.querySelector(".paragraph");
function toggleDisplay() {
  paragraphEl.classList.toggle("hide");
}

iconEl.addEventListener("click", toggleDisplay);
