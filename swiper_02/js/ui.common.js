
(()=>{

    function init(){
        window.addEventListener('load',()=>{

            var swiper = new Swiper('.mySwiper', {
                speed: 500,
                //direction: 'vertical',
                mousewheel: true,
                effect: "fade",
                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                on: {
                    activeIndexChange: function (){
                      if(this.realIndex==0){ console.log('첫번째'); }
                      pageNum.textContent=`${swiper.realIndex+1}`;
                    },
                    reachEnd: function () {
                        swiper.mousewheel.disable();
                        console.log('마지막');
                        bodyElem.style.overflowY='auto';
                    }
                },
                scrollbar: {
                    container :'.swiper-scrollbar',
                    hide: true,
                    draggable: false
                }
            });
    
            window.addEventListener('wheel', function (event) {
                if (event.deltaY < 0) {
                swiper.mousewheel.enable();
                } else if (event.deltaY > 0) {
                }
            });

            let btns, elem, pageNum;
            let yOffset, reSize, bodyElem, page=document.querySelector('.pageCont'); btns=document.querySelectorAll('button');
            bodyElem=document.getElementsByTagName('body')[0]; pageNum=document.querySelector('.swiper-pageNum');
            reSize=0;
            function setBtnEvent(){
                let _target;
                btns.forEach((el,i)=>{
                    //elem=e.getAttribute('data-target');
                    elem=el;
                    elem.onclick=(e)=>{
                        _target=e.target;
                        bodyElem.scrollTo({top: 1700, behavior:'smooth'});
                    }
                    console.log(elem);
                });
            }
            function setScrollLoop(){
                if(yOffset>3){
                    page.classList.remove('none');
                }else if(yOffset<=0){
                    console.log(' 0 으로');
                    bodyElem.style.overflowY='hidden';
                    page.classList.add('none');
                }
                // if(yOffset>=reSize/2){
                //     page.classList.add('none');
                // }
                console.log(yOffset);
            }
            pageNum.textContent=1;
            bodyElem.addEventListener('scroll', (e)=>{
                //yOffset=window.pageYOffset; reSize=window.innerHeight;
                yOffset=e.target.scrollTop;
                setScrollLoop();
            });

            setBtnEvent();

        });



    }
    init();

    
    
})();