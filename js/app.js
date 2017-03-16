$(function() {
    $(".button-collapse").sideNav({
         edge: 'right', 
         closeOnClick: true,
    });
    var footerHeight = $('.page-footer').height() + 20;
    $('main').css('marginBottom', footerHeight);

    /*Inisialisasi*/
    if ($(window).scrollTop() > 20) {
        $(".navbar-fixed").addClass("navbar-fixed").find('nav').addClass('z-depth-1');
    }
});
$(window).scroll(function() {
    var menu = $('.navbar'),
        pos = menu.offset();
    if ($(this).scrollTop() > pos.top) {
        $(".navbar").addClass("navbar-fixed").find('nav').addClass('z-depth-1');
        $('.mega-drop.active').removeClass('active');
        var logo = document.getElementById('head-logo').src;
        $('#home a').html("<img src='" + logo + "' height='32px' style='margin:16px'/>");
    } else {
        $(".navbar").removeClass("navbar-fixed").find('nav').removeClass('z-depth-1');
        $('.mega-drop.active').removeClass('active');
        $('#home a').html("<i class='fa fa-home'></i>");
    }

});
var $svg = $('.svg').drawsvg({
    easing: 'easeInOutQuart',
    callback: function() {
        animate();
    }
});
var $semnassvg = $('.semnassvg svg').drawsvg({
    easing: "easeInOutQuart",
});
var $wmssvg = $('.wmssvg svg').drawsvg({
    easing: "easeInOutQuart",
});
/*RUN*/
function animate() {
    $svg.drawsvg('animate');
}
animate();
var options = [{
    selector: '.semnassvg',
    offset: 300,
    callback: function() {
        $semnassvg.drawsvg('animate');
    }
}, {
    selector: '.semnassvg',
    offset: 600,
    callback: function() {
        $wmssvg.drawsvg('animate');
    }
}, ];
Materialize.scrollFire(options);

$('.animsition').animsition({
        inClass : 'fade-in',
        outClass : 'fade-out-up-sm',
        inDuration : 500,
        outDuration : 400,
        touchSupport: true,
        linkElement: '.animsition-link, a[href]:not([target="_blank"]):not([href^="#"]):not([href*="javascript"]):not([href*=".jpg"]):not([href*=".jpeg"]):not([href*=".gif"]):not([href*=".png"]):not([href*=".mov"]):not([href*=".swf"]):not([href*=".mp4"]):not([href*=".flv"]):not([href*=".avi"]):not([href*=".mp3"]):not([href^="mailto:"]):not([class="no-animation"])',
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '<img src="../img/ripple.svg">',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
});
