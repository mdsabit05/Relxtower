
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  const page1 = document.querySelector("#page1");
  const halfPageHeight = page1.offsetHeight / 2;

  if (window.scrollY > halfPageHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
});