


(()=>{



    function init(){
        window.addEventListener('load',()=>{
            const pageable = new Pageable("main", {
                freeScroll: false,
                swipeThreshold: 100,
                infinite: false,
                paddingRight: '0px',
                responsiveHeight: 0,
                scrollBar: false,
                scrollOverflow: false,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                
            });
        });
        
    }
    init();

})();



// let px, elems, resize, pageCont, offsetHeights;
// pages=document.getElementsByClassName('pg-wrapper');
// popCont=document.querySelector('.pg-container');
// function setScrollEvent(){
//     px='px'; pages[0].style.paddingRight='0'; pages[0].style.overflow='hidden';
//     elems=popCont.children;
//     [...elems].forEach((e,i)=>{
//         elems=e.attributes[3]; elems=e; elems.style.width=resize+px;
//         elems.style.height=offsetHeights+px;
//     })
// }
// function init(){
//     setScrollEvent();
//     window.addEventListener('resize',(e)=>{
//         let _target=e.target;
//         resize=e.target.innerWidth; offsetHeights=_target.innerHeight;
//         pages[0].style.width=`${resize}`+px; //pages[0].style.height=offsetHeights+px;

//         setScrollEvent();
//     });
    
// }
// init();

