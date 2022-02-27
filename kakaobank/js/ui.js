
$(function(){

    /* var ww = $(window).width();
    $(window).on('resize', function () {
      ww = $(window).width();
      if (ww < 1280) {
        
      }else{
        
      }
    }); */

      var swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        loop: true,
        //spaceBetween: 20,
        //direction: 'vertical',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // on: {
        //   resize: function () {
        //     swiper.changeDirection(getDirection());
        //   },
          
        // },
      });
      

      /* function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
        
        return direction;
      } */

      
      var minWidth = 767;
      var nav = $('.navWrap');

      $(window).on('resize', function(){
          //console.log('resize');

          if(window.innerWidth <= minWidth){
            nav.css({
              transition: 'right .35s'
            });
          }else{
            nav.css({
              transition: 'initial'
            });
          }
      });
     
      
      $('.btnMenu').click(function(){
        $(this).toggleClass('active').next().toggleClass('active');

        /* if($(this).hasClass("active") === true){
          $(this).next('.navWrap').animate({
            right: '0'
          }, 320);
        }else{
          $(this).next('.navWrap').animate({
            right: '-35%'
          }, 320); 
        }*/
        
      });

      //var bodyScr = $('body').offset();
      var divEl = $("#scrEvent").offset().top - 100;
      var bar = $('.moving');
      var barWidth = $('.moving').width();

       //onsole.log(Math.floor(divEl));

      $(window).scroll(function(){

        var scroll = $(window).scrollTop();

        if(divEl <= scroll){
          $("#scrEvent").addClass('active');
        } else {
          $("#scrEvent").removeClass('active');
        }
        //console.log(scroll);
        getPercent();
        
      });

      function getPercent(){
        
        var wrapHeight = $('#wrap').outerHeight();
        var winScrTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var realScrHeight = Math.floor(wrapHeight) - winHeight;
        var avgPercent = (winScrTop / realScrHeight) * 100;
        var avgText = Math.floor(avgPercent);
      
        //console.log(avgText);
        render(avgPercent, avgText);
        
      }
      function render(avgPercent, avgText){
        bar.css({
          left: avgText + '%',
          //left: "calc("+ avgText +"- 10px)"
        });
      }


});