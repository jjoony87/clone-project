
$(function(){

   $('.faq-question').click(function(){

      $(this).toggleClass('on').next().slideToggle(300);
      $(this).parent('li').siblings().find('.faq-question').removeClass('on').next().slideUp();
      
   });
    
});