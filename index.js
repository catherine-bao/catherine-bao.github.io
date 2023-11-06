// const sectionJS = document.querySelectorAll(".section")[0];

// const sectionJquery = $(".section");

// console.log(sectionJS);

// console.log(sectionJquery);

// sectionJquery.on('click', function() {
//     alert('caution dont click me again');
// });

$(document).ready(function(){

    $('.slideshow').slick({
        slidesToShow: 3,
        slidesToScroll: 3
    });

  });