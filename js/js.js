let op = document.querySelector("body .top");

window.onscroll = function () {
  if (this.scrollY >= 750) {
    op.style.display = "flex";
  } else {
    op.style.display = "none";
  }
};

op.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let cli = document.querySelector(".header .links i");
let ll = document.querySelector(".header .links ul");

cli.onclick = function () {
  ll.classList.toggle("aaa");
};
