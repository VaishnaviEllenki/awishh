window.addEventListener("load", function () {
  const loader = document.getElementById("pageLoader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1200);
});
