
// head Active
$(function(){

  new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "left",
    animateTime: 0.5,
    animateFunction: "ease",
    responsiveHeight: 0,

  });


  var thisActive = $(this).find(".dots > li > a");
  var newElement = $(this).find(".dots > li > a");

  $(window).on("wheel", function (event){
    if($(thisActive).eq(5).hasClass("active") === true) {
      $(".gnb-list .first").addClass('active').parent('li').siblings().find('a').removeClass('active');
    }else if($(thisActive).eq(6).hasClass("active") === true){
      $(".gnb-list .second").addClass('active').parent('li').siblings().find('a').removeClass('active');
    }else if($(thisActive).eq(7).hasClass("active") === true){
      $(".gnb-list .third").addClass('active').parent('li').siblings().find('a').removeClass('active');
    }
  });


  $(window).on("touchend",function(e){

    var winlink = window.location.hash.replace('#', '');
    console.log(winlink);

    // if(winlink == 5){
    //   $(".first").addClass('active').parent('li').siblings().find('a').removeClass('active');
    // }else if (winlink == 6){
    //   $(".second").addClass('active').parent('li').siblings().find('a').removeClass('active');
    // }else if (winlink == 7){
    //   $(".third").addClass('active').parent('li').siblings().find('a').removeClass('active');
    // }

  });
  

  var windowWidth = $( window ).width();
  var winSize = $(window).height();
  var gnbH = $(".gnb").outerHeight();
  var footH = $(".footer").outerHeight();
  var moSizeH = winSize - gnbH;
  var resultH = gnbH + footH;
  var defaultH = winSize - resultH;

  $(".scroll-container").css('height',+ moSizeH + 'px' );

  if($(".footer").css("display") == "none"){
    $(".scroll-container").css('height',+ moSizeH + 'px' );
  }


  //브라우져 리사이즈

  let reSize, mainCont;
  mainCont=document.querySelector('.scroll-container');
  $(window).resize(function(e){

    var winH = $(window).height();
    var gnbResizeH = $(".gnb").outerHeight();
    var footResizeH = $(".footer").outerHeight();
    var resultReH = gnbResizeH + footResizeH;
    var defaultReH = winH - resultReH;
    var resizMo =  winH - gnbResizeH;
    reSize=e.target.innerWidth;

    if($(".footer").css("display") == "block"){
        $(".scroll-container").css('height',+ resizMo + 'px' );
    }else{
        $(".scroll-container").css('height',+ resizMo + 'px' );
    }

  });

  $(".gnb-list li > a").click(function(){
    $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
  });


  if(windowWidth < 500) {
    $(".scroll-container").css('height',+ moSizeH + 'px' );
  }


});





