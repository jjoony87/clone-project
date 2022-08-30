window.onload = function(){


    const slides = document.getElementsByClassName('swiper');
    const navBar = document.querySelector('.navBar');

    // nav animation
    navBar.classList.add('active');

    // swiper set 1
    if(slides.length > 0){
        slide_main();
    }

    toggle();
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

function slide_main(){

    var swiper = new Swiper(".mainSlide, .cateList", {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });

}