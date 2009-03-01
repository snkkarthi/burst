$(document).ready(function(){
    var initPJS = function(){
      var myCanvas = $("#burst").get(0);
      var myPJSscript = $("#myBurstScript").val();
      Processing(myCanvas, myPJSscript);
      $('span.version').text(window.Processing.data.burstVersion);
    }
    initPJS(); //autoinit
    
    $('#myBurstScript').focus(function(){ $(this).css({overflow:'scroll'}); });
    $('#myBurstScript').blur(function(){ $(this).css({overflow:'hidden'}); });
    $('input[name=run]').click(function(){
        var myCanvas = $("#burst").get(0);       
        window.Processing.data.kill=myCanvas;
        initPJS();
        return false;
    });
    $('input[name=info]').click(function(){
        $('div#info').css({opacity:'.9'}).slideToggle(300);        
        return false;
    });
    $('div#info').hover(function(){},function(){
            $(this).slideUp(300);
    });
});