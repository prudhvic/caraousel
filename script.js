let slides = document.querySelectorAll(".caraousel-item");
let next = document.querySelector(".nextbtn");
let prev = document.querySelector(".prevbtn");

let slideslen = slides.length;
let index = 0;
next.addEventListener("click", nextslide);
prev.addEventListener("click", prevslide);

function hideslides() {
  for (let slide of slides) {
    slide.classList.remove("caraousel-visible");
    slide.classList.add("caraousel-hidden");
  }
}
function nextslide() {
  hideslides();
  if (index == slideslen - 1) {
    index = 0;
  } else {
    index++;
  }

  console.log(slides[index]);
  slides[index].classList.add("caraousel-visible");
}
function prevslide() {
  hideslides();
  if (index == 0) {
    index = slideslen-1
  } else {
    index--;
  }

  slides[index].classList.add("caraousel-visible");
}
