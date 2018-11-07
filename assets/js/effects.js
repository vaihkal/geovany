$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(window).height()){
            $(".navbar").css({"background-color":"#e7e7e7"});   
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
            $(".navbar").css({"border-color":"transparent"});
        }
    })
})