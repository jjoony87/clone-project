
(()=>{

    function init(){
        
        var swiper = new Swiper('.mainSwiper', {
            speed: 500,
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
                    if(this.realIndex==0){

                    console.log('첫번째');
                    
                    }else if(this.realIndex===5){
                        swiper.mousewheel.disable();
                        bodyElem.style.overflowY='auto';
                    }
                    pageNum.textContent=`${swiper.realIndex+1}`;
                    
                },
                reachEnd: function () {
                    swiper.mousewheel.disable();
                    bodyElem.style.overflowY='auto';
                }
            },
            scrollbar: {
                container :'.swiper-scrollbar',
                hide: true,
                draggable: false
            }
        });

        // const swiper1 = new Swiper('.tabSwiper1,.tabSwiper2,.tabSwiper3,.tabSwiper4,.tabSwiper5', {
        //     speed: 500,
        //     slidesPerView: "auto",
        //     loop: false,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         type: "progressbar",
        //     },
        // });

        const swiper1 = new Swiper('.tabSwiper1', {
            speed: 500,
            slidesPerView: "auto",
            loop: false,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        const swiper2 = new Swiper('.rollingSwiper1', {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });
        const swiper3 = new Swiper('.rollingSwiper2', {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
        });

        // window.onwheel=(e)=>{
        //     if(e.deltaY > 0 && this.realIndex==5){
        //         console.log('scroll~~');
        //         swiper.mousewheel.disable();
        //         bodyElem.style.overflowY='auto';
        //     }
        // }

        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {swiper.mousewheel.enable();} else if (event.deltaY > 0) {}
        });
        let btns, pageNum, tabs, boxs, inds;
        let yOffset, el, reSize, bodyElem, page=document.querySelector('.pageCont'); btns=document.querySelectorAll('.btns>li>button');
        bodyElem=document.getElementsByTagName('body')[0]; pageNum=document.querySelector('.swiper-pageNum>span');
        tabs=document.querySelectorAll('.tabs-nav>ul>li'); boxs=document.querySelectorAll('.tabs-box>.item'); inds=document.querySelectorAll('.indicator');
        //links=document.querySelectorAll('.links-wrap>button');
        reSize=0;
        // function setLinksEvent(){ 
        //     let _targetL;
        //     getOffsetTop=document.getElementById('link1');
        //     getOffsetTop=getOffsetTop.offsetTop;
        //     links.forEach((e,i)=>{
        //         e.onclick=(e)=>{_targetL=e.target;
        //             for(el=0; el<tabs.length; el++){
        //             btns[el].removeAttribute('class'); tabs[el].classList.remove('on')}
        //             tabs[i].classList.add('on');btns[i].setAttribute('class','active');
        //             bodyElem.scrollTo({top: getOffsetTop, behavior:'smooth'});
        //         }
        //     });
        // }
        // function setBtnEvent(){
        //     let _target, parents, items, none, elClass; none='none';
        //     btns.forEach((el,i)=>{elem=el;
        //         elem.onclick=(e)=>{
        //             _target=e.target; parents=_target.parentNode.parentElement; elClass=_target.classList;
        //             for(let el of [...tabs[i].parentNode.children]){items=el; items.classList.remove('on');}
        //             [...btns].map((e)=>{e.removeAttribute('class')});
        //             tabs[i].classList.add('on'); elClass.add('active');
        //         }
        //     });
        // }
        let _targets, parents, elemNodes, Offset, px, elems, nodeLine;
        function setTabsEvent(){
            Offset=tabs[0]; px='px'
            inds.forEach((e,i)=>{
                elems=e.parentNode.firstElementChild.children[0]; e.style.left=elems.offsetLeft+px; e.style.width=elems.offsetWidth+px;
            });
            tabs.forEach((e,i)=>{
                e.children[0].onclick=(e)=>{
                    _targets=e.target; elemNodes=_targets.classList; parents=_targets.parentNode.parentElement;
                    nodeLine=_targets.parentNode.parentElement.nextElementSibling;
                    parents=[...parents.children].filter((e)=>{e.children[0].removeAttribute('class')});
                    [...boxs[i].parentNode.children].map((e)=>{e.classList.remove('active')})
                    boxs[i].setAttribute('class','item active'); elemNodes.add('on');
                    nodeLine.style.left=_targets.offsetLeft+px; nodeLine.style.width=_targets.offsetWidth+px;}
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
            //console.log(yOffset);
        }
        document.querySelector('.swiper-pagination').children[0].style.transform='scaleX(0.166667) scaleY(1)';
        pageNum.textContent=1;
        //window.addEventListener('resize',()=>{setLinksEvent()});
        bodyElem.addEventListener('scroll', (e)=>{
            yOffset=e.target.scrollTop;
            setScrollLoop();
        });
        const observer=new IntersectionObserver((entries)=>{
            console.log(swiper.mousewheel);
        });
        observer.observe(document.querySelector('.mainSwiper'));
        //setBtnEvent();
        //setLinksEvent();
        setTabsEvent();
    }
    init();
    
})();