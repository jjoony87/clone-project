

(() => {

    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;

    const sceneInfo = [

        {
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-3')
            }
        },

    ]



    function setLayout(){

        for(let i=0; i<sceneInfo.length; i++){

            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;   
        }
    }

    function scrollLoop(){

        prevScrollHeight = 0;
        for(let i=0; i<currentScene; i++){
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }

        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene ++;
        }
        if(yOffset < prevScrollHeight){
            currentScene --;
        }

        console.log(currentScene);
        scrollCheck();
    
        //document.querySelector('body').classList.add(`secne-${currentScene}`);
    }

    function scrollCheck(){
        let isCheck = false;

        switch(currentScene){
            case 0:
                console.log('111');
                
            case 1:
                alert('1 입니다.');
                break;
            case 2:
                alert('2 입니다.');
                break;
            case 3:
                alert('3 입니다.');
                break;
            default: 
                break;
        }
    
    }
    
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    });
    setLayout();

})();