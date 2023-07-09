
(()=>{

    

    function setSwiperEvent(){
        const swiperGap = new Swiper('.swiper-type1', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            autoplay:{
                delay: 1000,
                disableOnInteraction: true,
            },
        });
    }

    function init(){
        window.addEventListener('load', ()=>{
            setSwiperEvent();

            new fullScroll({
                mainElement: "main",
                displayDots: true,
                dotsPosition: "right",
                animateTime: 0.5,
                animateFunction: "ease"
            });
        });
    }
    init();

    

    
})();