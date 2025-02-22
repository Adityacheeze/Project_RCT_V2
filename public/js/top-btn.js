const ScrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    ScrollToTopButton.style.display="block";
  } else {
    ScrollToTopButton.style.display="none";
  }
});

ScrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// export default ScrollToTopButton;
