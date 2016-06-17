

$(function(){
  
  $('section').each(function(){
    $(this).css({
      height:$(window).height()+'px'
    });
  });

  $('.wrap:not(#0)').magicScroll({
    oneTime: false,
    
    textillate: {
      selector: 'h1',
      inEffects: ['flash', 'pulse', 'flip', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight', 'fadeInRightBig', 'fadeInLeftBig']
    }
  }); 
  
});