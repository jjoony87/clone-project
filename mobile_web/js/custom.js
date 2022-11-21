window.onload = function(){
    
    const gnb_include = document.querySelector('.gnb-include');
    const categoryList = document.querySelectorAll('.category-accodion > .title');
    const categoryDetail = document.querySelectorAll('.detail');
    const recentItems = document.querySelectorAll('.items > .item');
    const btnAllclear = document.querySelector('.btn-all-clear');

    $('.gnb-include').load('/mobile_web/include/gnb.html');
    $('.main-header-include').load('/mobile_web/include/main-header.html');

    
    function category(){
        
        for(let i=0; i<categoryList.length; i++){
            categoryList[i].onclick = function(){
                if(categoryList[i].classList.contains('on')){
                    console.log('111');
                    categoryDefault();
                    return;
                }
                categoryDefault();
                categoryList[i].classList.add('on');
                categoryList[i].nextElementSibling.classList.add('on');
            }
        }
    }
    function categoryDefault(){
        categoryDetail.forEach(el => {
            el.classList.remove('on');
        })
        categoryList.forEach(list => {
            list.classList.remove('on');
        })
    }

    function recentSet(){
        btnAllclear.onclick = function(){
            recentItems.forEach(item => {
                item.remove();
            });
        }
        for(let i=0; i<recentItems.length; i++){
            recentItems[i].onclick = function(){

                recentItems[i].style.color = '#fff';
                recentItems[i].style.height = '0';
                recentItems[i].children[1].style.fontSize = '0';
                setTimeout(() => {
                    recentItems[i].remove();
                }, 100);
                
            }
        }
    }

    function init(){
        category();
        recentSet();
    }
    init();
}