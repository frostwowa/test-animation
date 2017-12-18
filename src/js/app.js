// example of simple includes for js
//=include lib/jquery.min.js
//=include lib/wow.min.js

// tabs
(function () {
    var tabs = $('.js-list');
    tabs.each(function () {
        var thisTabs = $(this),
            nav = thisTabs.find('.js-link'),
            item = thisTabs.find('.js-item');
        nav.on('click', function () {
            var thisNav  = $(this),
                indexNav = thisNav.index();
            nav.removeClass('active');
            thisNav.addClass('active');
            item.hide();
            item.eq(indexNav).fadeIn();
            return false;
        });
    });
}());


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

$(function(){
    
    var $burger = $('.burger');
    var $menu  = $('.js-menu');
    var $bars = $('.burger-svg__bars');
    var $bar = $('.burger-svg__bar');
    var $bar1 = $('.burger-svg__bar-1');
    var $bar2 = $('.burger-svg__bar-2');
    var $bar3 = $('.burger-svg__bar-3');
    var isChangingState = false;
    var isOpen = false;
    var burgerTL = new TimelineMax();
    
    function burgerOver() {
            
        if(!isChangingState) {
            burgerTL.clear();
            if(!isOpen) {
                burgerTL.to($bar1, 0.5, { y: -2, ease: Elastic.easeOut })
                        .to($bar2, 0.5, { scaleX: 0.6, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
                        .to($bar3, 0.5, { y: 2, ease: Elastic.easeOut }, "-=0.5");
            }
            else {
                burgerTL.to($bar1, 0.5, { scaleX: 1.2, ease: Elastic.easeOut })
                        .to($bar3, 0.5, { scaleX: 1.2, ease: Elastic.easeOut }, "-=0.5");
            }
        }
    }
    
    function burgerOut() {
        if(!isChangingState) {
            burgerTL.clear();
            if(!isOpen) {
                burgerTL.to($bar1, 0.5, { y: 0, ease: Elastic.easeOut })
                        .to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut, transformOrigin: "50% 50%" }, "-=0.5")
                        .to($bar3, 0.5, { y: 0, ease: Elastic.easeOut }, "-=0.5");
            }
            else {
                burgerTL.to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut })
                        .to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.5");
            }
        }
    }
    
    function showCloseBurger() {
        burgerTL.clear();
        burgerTL.to($bar1, 0.3, { y: 6, ease: Power4.easeIn })
                .to($bar2, 0.3, { scaleX: 1, ease: Power4.easeIn }, "-=0.3")
                .to($bar3, 0.3, { y: -6, ease: Power4.easeIn }, "-=0.3")
                .to($bar1, 0.5, { rotation: 45, ease: Elastic.easeOut, transformOrigin: "50% 50%" })
                .set($bar2, { opacity: 0, immediateRender: false }, "-=0.5")
                .to($bar3, 0.5, { rotation: -45, ease: Elastic.easeOut, transformOrigin: "50% 50%", onComplete: function() { isChangingState = false; isOpen = true; } }, "-=0.5");
    }
    
    function showOpenBurger() {
        burgerTL.clear();
        burgerTL.to($bar1, 0.3, { scaleX: 0, ease: Back.easeIn })
                .to($bar3, 0.3, { scaleX: 0, ease: Back.easeIn }, "-=0.3")
                .set($bar1, { rotation: 0, y: 0 })
                .set($bar2, { scaleX: 0, opacity: 1 })
                .set($bar3, { rotation: 0, y: 0 })
                .to($bar2, 0.5, { scaleX: 1, ease: Elastic.easeOut })
                .to($bar1, 0.5, { scaleX: 1, ease: Elastic.easeOut }, "-=0.4")
                .to($bar3, 0.5, { scaleX: 1, ease: Elastic.easeOut, onComplete: function() { isChangingState = false; isOpen = false; } }, "-=0.5");
    }

    $burger.on('click', function(e) {
        
        if(!isChangingState) {
            isChangingState = true;
        
            if(!isOpen) {
                showCloseBurger();
            }
            else {
                showOpenBurger();
            }   
        }
        
    });
    
    $burger.hover( burgerOver, burgerOut );

    burger.on('click', function(){
        burger.toggleClass('active');
        menu.toggleClass('visible');
    });
    
});

console.clear();

// menu
(function () {
    var burger   = $('.burger'),
        menu     = $('.js-menu');
    burger.on('click', function(){
        burger.toggleClass('active');
        menu.toggleClass('visible');
    });
}());


