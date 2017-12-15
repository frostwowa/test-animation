// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/wow.min.js

// wow
(function () {
    var posScroll = $(window).scrollTop();
    $('.wow').each(function () {
        var _this = $(this),
            posTop = _this.offset().top;
        if (posScroll >= posTop) {
            _this.removeClass('wow fadeInUp');
        }
    });
    new WOW().init();
}());

// popup
(function () {
    var body = $('body'),
        popup;
    $('[data-popup]').on('click', function (e) {
        e.preventDefault();
        var data = $(this).data('popup');
        popup = $(data);
        showPopup();
    });
    $('.js-popup-close').on('click', function (e) {
        e.preventDefault();
        hidePopup();
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) hidePopup();
    });

    function showPopup() {
        body.addClass('no-scroll');
        popup.show();
        setTimeout(function () {
            popup.addClass('visible');
        }, 100);
    }
    function hidePopup() {
        body.removeClass('no-scroll');
        popup.removeClass('visible');
        setTimeout(function () {
            popup.hide();
        }, 300);
    }
}());
