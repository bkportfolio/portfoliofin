$(function(){
    window.setInterval(function(){
        $("#slides").animate({"marginLeft" : "-100%"},'2s',function(){
            $(this).children(":first").appendTo($(this));
            $(this).css("marginLeft", 0);
        });
    },3000);


    

    var $window = $(window);

    $("html").animate({scrollTop : 0}, 30);


    $window.on("scroll",function(){

        var scrollTop  = $window.scrollTop();
        var viewport = $window.height();
        var scrollview =scrollTop + viewport;
        var introduce1 = $("#introduce1");
        var introduce1top = introduce1.offset().top;
        var keywordspan = $("#keyword > span");
        var vision2img = $("#vision2 img");
        var vision2p = $("#vision2 p");
    

    
        
       
        if((scrollview - 200) >= introduce1top && scrollview < introduce1top + 500){
            introduce1.css({"opacity" : 1, transitionDuration : "500ms"});
        } else if(scrollview > introduce1top + 1000){
            introduce1.css({"opacity": "0", transitionDuration : "500ms"});
        }


        // 키워드 페이지
        keywordspan.each(function(){
            var Top = $(this).offset().top;

            if((scrollview -400) >= Top){
                $(this).css({"opacity" : 1, transitionDuration : "500ms"});
            }
        });




        // 비전 페이지

            // 비전 이미지
        vision2img.each(function(){
            var Top = $(this).offset().top;
            
            if(scrollview - 200 >= Top){
                $(this).css({"opacity" : 1, transitionDuration : "500ms"});
            }
        });

            // 비전 문구
        vision2p.each(function(){
            var Top = $(this).offset().top;
            
            if(scrollview - 200 >= Top){
                $(this).css({"opacity" : 1, transitionDuration : "500ms"});
            }
        });

        
        
    });
    
    
    window.setInterval(function(){
        $("#hangerul").animate({"margin-top" : "-400px"},"slow",function(){
            $(this).removeAttr("style").children(":first").appendTo($(this));
        });
            
    },3000);
    

   

});

