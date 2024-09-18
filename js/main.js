$(document).ready(function(){

    const nextIcon="<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.1713 25.7279L0.443359 13L13.1713 0.272078L15.9997 3.10051L6.10021 13L15.9997 22.8995L13.1713 25.7279Z\" fill=\"white\"/>\n" +
        "</svg>\n";
    const prevIcon = "<svg width=\"16\" height=\"26\" viewBox=\"0 0 16 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.82872 0.272078L15.5566 13L2.82872 25.7279L0.000291705 22.8995L9.89979 13L0.000291705 3.10051L2.82872 0.272078Z\" fill=\"#929292\"/>\n" +
        "</svg>\n";

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1, // Select Item Number
        dots: true,
        nav: true,
        navText: [nextIcon,prevIcon],
    });

});

