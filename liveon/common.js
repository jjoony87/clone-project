window.onload = function(){

    swiper_banner();
    swiper_now();
    nowList();
    swiper_test();

    console.log('aaa');

    const slider = document.querySelector('.scrollBox');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      });
   
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
