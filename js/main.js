$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.4;
// set first image opacity
images[0].style.opacity = opacity;

function imgClick(e) {
  // reset opacity
  images.forEach(img => (img.style.opacity = 1));
  // change current img to src of clicked img
  current.src = e.target.src;
  // add fadeIn class
  current.classList.add('fade-in');
  // remove fadeIn class
  setTimeout(() => current.classList.remove('fade-in'), 500);
  // change opacity of clicked img
  e.target.style.opacity = opacity;
}

images.forEach(img => img.addEventListener('click', imgClick));
