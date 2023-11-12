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

