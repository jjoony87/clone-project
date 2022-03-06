$(function(){

    
    var scrollBody = $('#wrap');
    var header = $('header');
    var projectTop = $('.project').offset().top;
    var gauge = $('.line');

    //console.log(projectTop);

    function headerTop(){
        var winScrTop = $(window).scrollTop();
        var scrHeight = scrollBody.outerHeight();
        var headerHeight = header.outerHeight();
        var scrRealHeight = scrHeight - $(window).height();
        var percentAvg = winScrTop / scrRealHeight * 100 
        var percentTxt = Math.floor(percentAvg);
        console.log(percentTxt);
        //console.log(scrRealHeight);
        headerAct(percentTxt, headerHeight);
        fixMotion(percentTxt);
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
        //console.log('aaa');
        gauge.css({
            width: percentTxt + '%'
        });
    }

    // $('.header_inner a').click(function(){
        
    // });
    
    function render(){
        headerTop();
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