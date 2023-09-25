$('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.nxt-arrow',
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 1000,
            }
        }]
    },

);