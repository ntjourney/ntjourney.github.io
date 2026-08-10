document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img[src=\"C109D335-EFBE-4BED-9522-CA814AA267DD.png\"]").forEach((image) => {
    image.src = "../C109D335-EFBE-4BED-9522-CA814AA267DD.png";
  });

  const script = document.createElement("script");
  script.src = "../hero-premium.js";
  script.defer = true;
  document.head.appendChild(script);
});
