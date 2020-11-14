var speed = 500;

function scrolling(obj){
    if (!obj){
        $('html, body').animate({scrollTop:0},speed);
    }else{
        var posTop = $(obj).offset().top -80;
        $ ('html, body'),animate({scrollTop:posTop},speed)
    }
};
