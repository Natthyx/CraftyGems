/* Pop up for the navbar */
$('.fa-bars').click(function(){
    $('ul').addClass('show');
   });
$('.fa-xmark').click(function(){
    $('ul').removeClass('show')
});

$('.fa-magnifying-glass').click(function(){
    $('.searchbar').toggleClass('show')
})
