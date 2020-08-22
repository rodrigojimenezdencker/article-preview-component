document.addEventListener("DOMContentLoaded", () => {
  const shareButtonDesktop = document.querySelector(
      "[data-hook='shareButton-desktop']"
    ),
    tooltipContainer = document.querySelector(".tooltip-container"),
    shareButtonMobile = document.querySelector(
      "[data-hook='shareButton-mobile']"
    ),
    socialButtonsMobile = document.querySelector(".social-buttons");

  shareButtonDesktop.addEventListener("click", () => {
    tooltipContainer.classList.toggle("hidden");
    shareButtonDesktop.classList.toggle("active");
  });

  shareButtonMobile.addEventListener("click", () => {
    socialButtonsMobile.classList.toggle("hidden");
    shareButtonMobile.classList.toggle("active");
  });
});
