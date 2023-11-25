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
//swiper
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

const productList=[
  {id:1,image:'../images/goldNecklace.jpg',productName:"Gold Necklace",price:"14000 Birr"},
  {id:2,image:'../images/earing.jpg',productName:"Earing",price:"1000 Birr"},
  {id:3,image:'../images/magneticbracelet.jpeg',productName:"Magnetic Bracelet",price:"2000 Birr"},
  {id:4,image:'../images/Lara.jpg',productName:"Lara Earing",price:"3000 Birr"},
];

const productListContainer = document.getElementById('row');

  // Map over the products array and create HTML elements
  const productElements = productList.map(product => {
    const productDiv = document.createElement('div');

    productDiv.classList.add("productCol")
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.productName}">
      <h4>${product.productName}</h4>
      <h5>${product.price}</h5>
      <button class="buybtn">BUY NOW</button>
    `;
    return productDiv;
  });
  // Append the product elements to the container
  productElements.forEach(productElement => {
    productListContainer.appendChild(productElement);
  });


