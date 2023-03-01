
window.onload =()=> {

    /* Toggle Buttons */
    function toggleButton(){
        const toggles = document.querySelectorAll('.toggle_wrap > .toggle_cont');

        if(toggles.length > 0){
            let elmParent;
            let elmArray;
            let elmChild;
            let elmAll;
            toggles.forEach((el) => {
                const thisElm = el;
                thisElm.onclick = (e) => {
                    const target = e.target;
                    elmParent = target.parentElement.parentElement.children;
                    elmAll = target.parentElement.parentElement.children[0].children[0];
                    for(key of elmParent){
                        elmArray = key;
                        elmChild = elmArray.children[0].classList;
                        if(elmAll.textContent == target.textContent){
                            elmChild.remove('on');    
                        }else{
                            elmAll.classList.remove('on');
                        }
                    }
                    target.classList.toggle('on');
                }
            });
        }
    }


    /* tollip */
    function tooltip(){
        const tooltipBox = document.querySelectorAll('.tooltipBox');
        const roundBox = document.querySelectorAll('.roundBox');
        const bodyLayer = document.querySelector('body');
        
        if(roundBox.length > 0){
            bodyLayer.addEventListener('click', (e) => {
                const path = e.target;
                const pathClass = path.getAttribute('class');
                const pathElm = e.target.offsetParent.children[1].classList;
                if(pathClass == 'btn-tooltip ico-tooltip' || pathClass == 'tooltipBox on'){
                    pathElm.add('on');
                }else{
                    tooltipBox.forEach((el,i) => {el.classList.remove('on')});
                }
            });
        }
    }

    /* tab-button */
    function tabScrollLoop(){
        let yOffset = 0;
        let sectionPosY = 0;
        let sectionsTop = 0;
        let sectionsOffset = 0;
        let isVisible = false;
        const tabButton = document.querySelectorAll('.tab-button > button');
        const tabSection = document.querySelectorAll('.tab-section > section');
        if(tabButton.length > 0){
            
            function setScroll(){

                tabSection.forEach((el, i) => {
                    const tabBtns = el;
                    let btnsClass;
                    sectionsTop = el.parentNode.children[0].offsetTop;
                    sectionPosY = el.offsetTop;
                    
                    tabButton[i].onclick = () => {
                        sectionsOffset = tabSection[i].offsetTop;
                        window.scrollTo({top:sectionsOffset, behavior:'smooth'});
                        console.log('Top : ', sectionsOffset);
                        isVisible = true;
                    }
                    if(!isVisible){
                        if(yOffset >= sectionPosY){
                            for(let i=0; i<tabButton.length; i++){
                                btnsClass = tabButton[i].classList;
                                btnsClass.remove('on');
                            }
                            tabButton[i].classList.add('on');
                        }else if(yOffset < sectionsTop){
                            tabButton[i].classList.remove('on');
                        }
                    }
                    //console.log(yOffset);
                });
            }
            
            // tabButton.forEach((el,i) => {
            //     const tabBtnsActive = el;
            //     sectionsOffset = tabSection[i].offsetTop;
            //     let btnElms = 0;
            //     tabBtnsActive.onclick =(e)=>{
            //         btnTarget = e.target;
            //         btnChildren = e.target.parentNode.children;
            //         btnTarget.classList.add('on');
            //         sectionsOffset = tabSection[i].offsetTop;
            //         //console.log(sectionsOffset);
            //         window.scrollTo({top:sectionsOffset, behavior:'smooth'});
            //     }
            // });
            let lastScrollY = 0;
            window.addEventListener('scroll', () => {
                let scrollY = window.scrollY;
                //let direction = scrollY > lastScrollY ? "down" : "up";
                // if(lastScrollY < yOffset){
                //     console.log('up~~~');
                // }
               // console.log(direction);
                
                yOffset = window.pageYOffset;
                // 버튼 클릭시 여기서 스크롤 안타게 return 해야함~
                setScroll();
            });
            setScroll();
        }
        
    }

    /* tab-list */
    function setButton(){
        let btnClass;
        const tabList = document.querySelectorAll('.tab-list > ul > li');
        const tabCont = document.querySelectorAll('.tab-cont > .tab-item');
        if(tabList.length > 0){
            tabList.forEach((el, i) =>{
                const target = el;
                target.onclick = (e)=>{
                    let btns = 0;
                    btnClass = e.target.classList;
                    for(let i=0; i<tabList.length; i++){
                        btns = tabList[i].children[0].classList;
                        btns.remove('on');
                        tabCont[i].classList.remove('active');
                    }
                    tabCont[i].classList.add('active');
                    btnClass.add('on');
                }
            });
        }
    }
    
    /* popup-toast */
    function setPopup(){
        let popupWrapHeight;
        let popupStyle;
        let popupElm;
        const popupDefault = 0;
        const bodyElm = document.querySelector('body');
        const popup = document.querySelectorAll('.popup-container');
        const popupWrap = document.querySelector('.popup-wrap');
        const btns = document.querySelectorAll('.poopup-button > button');
        const dim = document.querySelector('.dim');

        if(btns.length > 0){
            btns.forEach((el,i) =>{
                const target = el;
                popupWrapHeight = popupWrap.offsetHeight + 50;
                popupStyle = popup[i].style.bottom;
                popupStyle = -popupWrapHeight + 'px';
                target.onclick=(e)=>{
                    const dataElm = e.target.getAttribute('data-target');
                    console.log(popup[i].getAttribute('id'));
                    if(popup[i].getAttribute('id') == dataElm){
                        popup[i].classList.add('active');
                        popupStyle = popupDefault + 'px';
                        dim.classList.add('active');
                        bodyElm.classList.add('hidden');
                    }
                    //console.log(dataElm);
                    //console.log('오픈후~~', popupStyle);
                    if(i == 0){
                        return;
                    }
                }
                dim.addEventListener('click', (e) => {
                    const elm = e.target;
                    popup[i].classList.remove('active');
                    dim.classList.remove('active');
                    bodyElm.classList.remove('hidden');
                });
            });
        }
    }

    function init(){
        tooltip(); //toolip
        setPopup(); //popup-toast
        setButton(); //tab-list
        tabScrollLoop(); //tab-button
        toggleButton(); //toggleButton
    }
    init();
}