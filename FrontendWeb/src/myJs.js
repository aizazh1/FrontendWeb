$(function () {

    //initialize sideNav
    $('.sidenav').sidenav();

    //initialize datePicker
    $('.datepicker').datepicker({
        format:'dd/mm/yyyy'
    });

    //add animation on hover
    $('.nav-wrapper li a').hover(function () {
        //hover in
        $(this).animate({ 'font-size': '20px', 'color': 'red' }, 250);
    }, function () {
        //hover out
        $(this).animate({ 'font-size': '15px', 'color': 'white' }, 250);
    });

    //initialize carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,

        //add link to btn
        onCycleTo: function (elem) {
            carouselIndex = $(elem).index();
            carouselUrl = carouselIndex == 1 ? 'https://www.java.com/' :
                          carouselIndex == 2 ? 'https://www.python.org/' :
                          carouselIndex == 3 ? 'https://www.javascript.com/' :
                                               'https://www.cprogramming.com/';
            $('#goToBtn').attr('href', carouselUrl);
        }
    });

    //carousel animation
    $('.carousel').animate({ 'margin-left':0 }, 1000);

    //on hover carousel image animation
    $('.carousel .carousel-item>img').hover(function () {
        //hover in
        $(this).animate({ width: 130 }, 500);
    }, function () {
        //hover out
        $(this).animate({ width: 140 }, 500);
    });

    //increment values inside cards
    setInterval(function () {
        projects = $('#projCnt').html();
        projects++;
        $('#projCnt').html(projects);
    }, 500);

    setInterval(function () {
        clients = $('#clientCnt').html();
        clients++;
        $('#clientCnt').html(clients);
    }, 600);

    setInterval(function () {
        courses = $('#courseCnt').html();
        if (courses < 100) {
            $('#courseCnt').html(++courses);
        }
    }, 700);

    setInterval(function () {
        lang = $('#langCnt').html();
        if (lang < 50) {
            $('#langCnt').html(++lang);
        }
    }, 1400);
});