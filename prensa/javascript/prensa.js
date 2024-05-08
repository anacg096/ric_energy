$(document).ready(function () {
    /* SLIDER DE NOTICIAS */
    // Inicializamos el slider de news
    var slider_news = $('.noticias__slider').slick({
        // Configuramos el slider de news
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        pauseOnHover: true,
        pauseOnFocus: true,
    });

    /* SLIDER DE NOTICIAS */
    // Evento de después del cambio de slide
    slider_news.on('afterChange', function (event, slick, currentSlide) {
        // Eliminar la clase active_news de todos los elementos del progress__bar
        $('.progressbar__bloque').removeClass('active_news');
        // Eliminar la clase opacity_news de todos los elementos
        $('.btn__flecha').removeClass('opacity_news');

        switch (currentSlide) {
            case 1:
                $('#news_two').addClass('active_news');
                break;
            case 2:
                $('#news_three').addClass('active_news');
                break;
            case 3:
                $('#news_four').addClass('active_news');
                break;
            case 4:
                $('#news_five').addClass('active_news');
                break;
            case 5:
                $('#news_six').addClass('active_news');
                $('#next_news').addClass('opacity_news');
                break;
            default:
                $('#news_one').addClass('active_news');
                $('#prev_news').addClass('opacity_news');
        }
    });

    // Evento de clic en el botón "Anterior" del slide de news
    $('#prev_news').on('click', function () {
        slider_news.slick('slickPrev');
    });

    // Evento de clic en el botón "Siguiente" del slide de news
    $('#next_news').on('click', function () {
        slider_news.slick('slickNext');
    });
});

