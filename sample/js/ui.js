$(function(){

    const typeInstance = new TypeIt('.topBox_intro', {
        speed: 50,
        //loop: true,
        afterComplete:function(instance){
            instance.destroy();
        }

    })
    .type('안녕하세요. 퍼블리셔 박명준 입니다.')
    .break({ delay: 800 })
    .type('다수 업종의 경험으로 다양한 업무를 진행하였습니다.')
    .break({ delay: 800 })
    .type('맡은 업무에 항상 최선을 다하겠습니다.')
    .break({ delay: 1000 })
    .type('감사합니다.', {delay: 700})
    .delete(6)
    .type('<span class="last_txt">Thank</span>', {delay: 500})
    .type('<i class="last_icon xi-emoticon-smiley-o"></i>')
    .go();

    var typeText = $('.topBox_intro');

    var mainBody = $('.main');
    var contents = $('.contents');
    var scrollBody = $('#wrap');
    var header = $('.header');
    var title = $('.title');
    var projectTop = $('.project').offset().top;
    var contentsTop = $('.contents').offset().top;
    var contactTop = $('.contact').offset().top;
    var gauge = $('.line');
    var imgAni = $('.img_ani');
    var sectionHeight = $('#section2').outerHeight();
    var sectionTop = $('#section2').offset().top;
    var isChk = false;
    var isTitleChk = false;

    console.log(contactTop);


    // cont 거리값 구하기
    function setMainProperty(){
        var winMainScrTop = $(window).scrollTop();
        var contentHeight = contents.outerHeight();
        var mainBodyHeight = mainBody.height();
        var mainHeight = mainBodyHeight - $(window).height();
        var mainOffsetTop = mainBody.offset().top;
        var sectionOffsetTop = mainBody.offset().top;
        var sectionScrTop = winMainScrTop - sectionOffsetTop;
        var mainScrPercent = sectionScrTop / mainHeight;
        //var mainPercent = sectionScrTop / mainHeight;
        //var mainPercentTxt = Math.floor(mainPercent * 100);
        //console.log(mainScrPercent);
        console.log(winMainScrTop);
        mainMotion(mainScrPercent, winMainScrTop);
    }

    // cont 모션 적용하기
    function mainMotion(mainScrPercent, winMainScrTop){
        var maskLeft = $('.ms_left');
        var maskRight = $('.ms_right');
        var endingText = $('.ending_txt');
        var maskStartValue = 50;
        var maskEndValue = 0;
        var maskRealValue = Math.max(maskEndValue, maskStartValue - (mainScrPercent * maskStartValue));

        maskLeft.css({
            width: maskRealValue + '%'
        });
        maskRight.css({
            width: maskRealValue + '%'
        });

        if(maskRealValue <= 45 && maskRealValue > 18){
            imgAni.addClass('active');
        }else{
            imgAni.removeClass('active');
        }
        // for(var i = 1; i >= 50; i++){
        //     console.log('for~');
        // }

        if(maskRealValue <= 8){
            endingText.addClass('active');
        }else{
            endingText.removeClass('active');
        }
        /* if(mainPercentTxt >= 1 || mainPercentTxt <= 10){
            aniText.addClass('active');
        }else if(winMainScrTop <= 10 || winMainScrTop <= 0){
            aniText.removeClass('active');
            //console.log('10 보다 작고 & 15 이하일때');
        } */
    }

    function headerTop(){
        var winScrTop = $(window).scrollTop();
        var scrHeight = scrollBody.outerHeight();
        var headerHeight = header.outerHeight();
        var scrRealHeight = scrHeight - $(window).height();
        var percentAvg = winScrTop / scrRealHeight * 100;
        var percentTxt = Math.floor(percentAvg);
        headerAct(winScrTop, headerHeight);
        fixMotion(percentTxt);
    }
    function headerAct(winScrTop, headerHeight){

        //console.log(winScrTop);
        if(winScrTop >= 300 && isChk == false){
            typeText.addClass('in');
            isChk = true;
        }else if(winScrTop <= 299 && isChk == true){
            typeInstance.reset();
            typeInstance.go();
            isChk = false;
        }

        if(winScrTop >= 0 && winScrTop <= 5){
            header.removeClass('active');
            
        }else if(winScrTop >= 5 && winScrTop <= 100){
            header.addClass('active');
        }
        if(winScrTop > 420 && winScrTop <= 3349){
            header.addClass('chgBg');
        }else if(winScrTop > 3350){
            header.removeClass('chgBg');
        }else {
            header.removeClass('chgBg');
        }
        if(winScrTop >= contentsTop - 150){
            //dimBody.addClass('active');
            contents.addClass('active');
        }else{
            contents.removeClass('active');

        }

        if(winScrTop + 120 > contactTop && isTitleChk == false){
            title.addClass('active');
            //console.log('진입~');
            isTitleChk = true;
        }else if(winScrTop <= sectionTop && isTitleChk == true){
            //console.log('다시 컴백');
            title.removeClass('active');
            isTitleChk = false;
        }
    }

    function fixMotion(percentTxt){
        gauge.css({
            width: percentTxt + '%'
        });

        if(percentTxt == 99){
            gauge.css({
                width: percentTxt + 1 + '%'
            });
        }
    }

    var itemText = $('.item_txt');
    var isMobile = document.getElementById('wrap');
    window.onresize = function(event){
        var innerWidth = window.innerWidth;
        if(innerWidth <= 530){
            itemText.text('Click Here');
        }else{
            itemText.text('Hover Here');
        }
    }
    
    
    function render(){
        headerTop();
        setMainProperty();
    }

    $(window).scroll(function(){
        render();
    });

    $('.header_inner a').click(function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

});