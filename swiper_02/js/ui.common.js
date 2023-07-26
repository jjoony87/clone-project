
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

            let btns, elem, pageNum, tabs, links, getOffsetTop;
            let yOffset, reSize, bodyElem, page=document.querySelector('.pageCont'); btns=document.querySelectorAll('.btns>li>button');
            bodyElem=document.getElementsByTagName('body')[0]; pageNum=document.querySelector('.swiper-pageNum');
            tabs=document.querySelectorAll('.tabs>div'); links=document.querySelectorAll('.links-wrap>button');
            getOffsetTop=document.getElementById('link1'); getOffsetTop=getOffsetTop.offsetTop;
            reSize=0;
            function setLinksEvent(){
                let _targetL;
                links.forEach((e,i)=>{
                    e.onclick=(e)=>{_targetL=e.target;
                        for(let el=0; el<tabs.length; el++){
                        btns[el].removeAttribute('class'); tabs[el].classList.remove('on')}
                        tabs[i].classList.add('on');btns[i].setAttribute('class','active');
                        bodyElem.scrollTo({top: getOffsetTop, behavior:'smooth'});
                    }
                });
            }
            function setBtnEvent(){
                let _target, parents, items, none, elClass; none='none';
                btns.forEach((el,i)=>{elem=el;
                    elem.onclick=(e)=>{
                        _target=e.target; parents=_target.parentNode.parentElement; elClass=_target.classList;
                        for(let el of [...tabs[i].parentNode.children]){ items=el; items.classList.remove('on');}
                        [...btns].map((e)=>{e.removeAttribute('class')});
                        tabs[i].classList.add('on'); elClass.add('active');
                    }
                });
            }
            function setScrollLoop(){
                if(yOffset>3){
                    page.classList.remove('none');
                }else if(yOffset<=0){
                    //console.log(' 0 으로');
                    bodyElem.style.overflowY='hidden';
                    page.classList.add('none');
                }
                // if(yOffset>=reSize/2){
                //     page.classList.add('none');
                // }
                //console.log(yOffset);
            }
            pageNum.textContent=1;
            bodyElem.addEventListener('scroll', (e)=>{
                yOffset=e.target.scrollTop;
                setScrollLoop();
            });
            setBtnEvent();
            setLinksEvent();
        });
    }
    init();
    
})();