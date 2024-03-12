// Get the owl carousel element
var owl = document.querySelector('.owl-carousel');

// Add data-position attribute to each child element
Array.from(owl.children).forEach(function (element, index) {
  element.setAttribute('data-position', index);
});

// Initialize the owl carousel
var owlCarousel = $('.owl-carousel').owlCarousel({
  center: true,
  loop: true,
  items: 5,
});

// Add click event listener to owl items
document.addEventListener('click', function (event) {
  if (event.target.closest('.owl-item>div')) {
    var position = event.target.closest('.owl-item>div').getAttribute('data-position');
    var speed = 300;
    owlCarousel.trigger('to.owl.carousel', [parseInt(position), speed]);
  }
});