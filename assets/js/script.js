document.addEventListener("DOMContentLoaded", () => {
  const shareButton = document.getElementById("share-button"),
    tooltipContainer = document.querySelector(".tooltip-container");

  shareButton.addEventListener("click", () => {
    tooltipContainer.classList.toggle("hidden");
    shareButton.classList.toggle("active");
  });
});
