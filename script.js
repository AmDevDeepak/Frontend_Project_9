const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function loader() {
  setTimeout(() => {
    document.querySelector(".loader").style.top = "-100%";
  }, 4000);
}

function swiperAnim() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}    

function imageEff() {
  var fixImg = document.querySelector(".fixed-image");
  document
    .querySelector(".elem-container")
    .addEventListener("mouseenter", () => {
      fixImg.style.display = "block";
    });

  document
    .querySelector(".elem-container")
    .addEventListener("mouseleave", () => {
      fixImg.style.display = "none";
    });

  var elems = document.querySelectorAll(".elem");
  elems.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var image = e.getAttribute("data-image");
      console.log(image);
      fixImg.style.backgroundImage = `url('${image}.webp')`;
    });
  });
}
imageEff();
swiperAnim();
loader();