window.onload = function(){

    swiper_banner();
    swiper_now();
    nowList();
    swiper_test();
}

function swiper_banner(){

    var swiper_bnr = new Swiper(".slide_banner", {
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
    });

}
function swiper_now(){

    var swiper_now = new Swiper('.slide_now', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        on: {
            slideChange: function() {
                
            },
        }
    });
  
}

function swiper_test(){

    var swiper_now = new Swiper('.slide_test', {
        slidesPerView: 'auto',
        spaceBetween: 70,
        //initialSlide: 2,
        loop: true,
        on: {
            slideChange: function() {
                
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
  
}

function nowList(){
    
    const nowList = document.querySelectorAll('.live_now_list > li');
    
    for(let i=0; i<nowList.length; i++){
        nowList[i].onclick = function(){
            if(nowList[i].getAttribute('class') != 'on'){
                nowList.forEach(el => {el.classList.remove('on')});
                nowList[i].classList.add('on');
            }
        }
    }

}
