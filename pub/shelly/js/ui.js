window.onload = function(){

    let stLists = 0;
    const slides = document.getElementsByClassName('swiper');
    const navBar = document.querySelector('.navBar');

    // nav animation
    navBar.classList.add('active');

    // swiper set 1
    if(slides.length > 0){
        slide_main();
    }

    toggle();
    init();
}

function toggle(){

    const list = document.querySelectorAll('.cateList ul > li');
    console.log(list.length);
    

    for(let i=0; i<list.length; i++){
        
        list[i].onclick = function(){
            list.forEach(el => {el.classList.remove('on')});
            list[i].classList.add('on');
        }
    }
}
function storeList(){

    const stList = document.querySelectorAll('.mainSlide > ul > li');

    for(let i=0; i<stList.length; i++){
        stLists = stList[i];
        stLists.onclick = () => {
            if(!stList[i].classList.contains('active')){
                stList.forEach(el => {
                    el.classList.remove('active');
                })
                stList[i].classList.add('active');
            }else{
                console.log('false');
            }
        }
    }
    
}

function slide_main(){

    var swiper = new Swiper(".mainSlide, .cateList", {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

}

function init(){
    storeList();
}