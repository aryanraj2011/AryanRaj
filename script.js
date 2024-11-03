const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";     
    }
    else{
        myImg.style.display = "none";
    }
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });