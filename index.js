const imgContainer = document.querySelector('.image_1');
console.log(imgContainer);




if(imgContainer){
    console.log("inside")

    $(imgContainer).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
              breakpoint: 431,
              settings:"unslick"
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        
    });
    
}
