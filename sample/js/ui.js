$(function(){

    var mainBody = $('.main_cont');
    var contents = $('.contents');
    var scrollBody = $('#wrap');
    var header = $('header');
    var projectTop = $('.project').offset().top;
    var gauge = $('.line');
    var aniText = $('.ani_text');

    //console.log(projectTop);

    // cont 거리값 구하기
    function setMainProperty(){
        var winMainScrTop = $(window).scrollTop();
        var mainBodyHeight = mainBody.outerHeight();
        var contentHeight = contents.outerHeight();
        var mainHeight = mainBodyHeight - $(window).height();
        var sectionOffsetTop = mainBody.offset().top;
        var sectionScrTop = winMainScrTop - sectionOffsetTop;
        var mainPercent = sectionScrTop / mainHeight;
        var mainPercentTxt = Math.floor(mainPercent * 100);
        //var mainRealHeight = mainHeight - $(window).height();
        //var mainScrPercent = winMainScrTop / mainHeight * 100;
        console.log(mainPercentTxt);
        //mainMotion(mainPercentTxt);
    }

    // cont 모션 적용하기
    function mainMotion(mainPercentTxt){
        
        console.log(mainPercentTxt);
        if(mainPercentTxt >= 10 && mainPercentTxt <= 15){
            console.log('aaa');
            aniText.addClass('active');
        }else if(mainPercentTxt < 10 || mainPercentTxt > 15){
            //console.log('10 보다 작고 & 15 이하일때');
        }
        for(var i = 1; i >= 50; i++){
            console.log('for~');
        }

    }

    function headerTop(){
        var winScrTop = $(window).scrollTop();
        var scrHeight = scrollBody.outerHeight();
        var headerHeight = header.outerHeight();
        var scrRealHeight = scrHeight - $(window).height();
        var percentAvg = winScrTop / scrRealHeight * 100;
        var percentTxt = Math.floor(percentAvg);
        //console.log(percentTxt);
        //console.log(scrRealHeight);
        headerAct(percentTxt, headerHeight);
        fixMotion(percentTxt);
        console.log(percentTxt);

    }
    function headerAct(percentTxt, headerHeight){
        if(percentTxt == 0 && percentTxt <= 5){
            header.removeClass('active');
            // header.css({
            //     top: -headerHeight + 'px'
            // });
        }else if(percentTxt >= 5 && percentTxt <= 100){
            header.addClass('active');
            //console.log(headerHeight);
        }

        /* if(percentTxt <= 5){
            console.log('aaa');
        }else if(percentTxt >= 80){
            console.log('bb');
        } */
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

    // $('.header_inner a').click(function(){
        
    // });
    
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