/* Pop up for the navbar */
$('.fa-bars').click(function(){
    $('ul').addClass('show');
   });
$('.fa-xmark').click(function(){
    $('ul').removeClass('show')
});

$('.fa-magnifying-glass').click(function(){
    $('.searchbar').toggleClass('show')
});
window.onscroll = function() {myFunction()};

var header = document.querySelector(".nav-bar");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


