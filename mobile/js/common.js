$(function(){

    const swiper = new Swiper('.visual', {
        loop: true,
        autoplay: {
            delay: 2000,
            disbleOnInteraction: true //슬라이드 넘김시 오토플레이 정지
        }
      });
    const swiperReply = new Swiper('.visual_reply', {
        loop: true,
        slidesPerView: 'auto',
        //centeredSlides: true,
        spaceBetween: 15,
        grabCursor: true,
        //spaceBetween: 30,
    });

    const swiperBanner = new Swiper('.bannerSwiper', {
        loop: true,
        slidesPerView: 'auto',
        //centeredSlides: true,
        spaceBetween: 15,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    swiper.on('slideChange', function () {
        var idx = swiper.realIndex;
        
        if(idx == '0'){
            color('#F17785');
        }else if(idx == '1'){
            color('#ABCD05');
        }
    });

    function color(color){
        $('.gnb li').each(function(){
            if($(this).hasClass('active')){
                $(this).children('a').css('color', color);
            }
        });
    }

});