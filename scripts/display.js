"use strict";

const iconEl = document.querySelector(".icon");
const paragraphEl = document.querySelector(".paragraph");
const detailsSummaryEl = document.querySelector(".details-summary");
function toggleDisplay() {
  paragraphEl.classList.toggle("hide");

  if (iconEl.textContent.includes("-")) {
    iconEl.textContent = "+";
  } else if (iconEl.textContent.includes("+")) {
    iconEl.textContent = "-";
  }
}
paragraphEl.classList.add("hide");

detailsSummaryEl.addEventListener("click", toggleDisplay);

async function fetchData() {}
