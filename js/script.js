$(function(){
    
    
    // 메인,헤더
    window.setTimeout(function(){
        $("#main1").animate({width : "100%"}, 1800, function(){
            $(".subinitial").animate({opacity :1}, 1000);
        })
    },500);

    // 프로필
    var $window = $(window);
    var profile1 = $("#profile1");
    var profile1Top = profile1.offset().top;
    var profileSentence = $("#profileSentence");
    var profileSentenceTop = profileSentence.offset().top;
    var skillsTop = $("#skills").offset().top;
    var $html = $("html");
    var pageIndex = 0;
    var windowHeight = $window.height();
    var lastPageIndex = $(".page").length -1;
    


    $html.animate({scrollTop : 0}, 30);
    
    $window.on("scroll",function(){
        
        var scrollTop  = $window.scrollTop();
        var viewport = $window.height();
        var scrollview =scrollTop + viewport;

            if(skillsTop <= $(document).scrollTop() && $("#website1").offset().top > $(document).scrollTop()){
                $(".progress").addClass("on");
            }
            else{
                $(".progress").removeClass("on");
            }

            
        });


    $("#contact").on("click",function(){
        $("#key").animate({width : "50%", opacity : 1}, 1500)
                 .animate({rotate :"180deg"}, 1000)
                 .animate({marginLeft :"160px", marginTop : "-100px"}, 1000, function(){
                    $("#unlock").animate({opacity : 0}, 500);
                    $("#circle").addClass("on");
                });
    });
        
        



    window.setInterval(function(){
        $("#designs").animate({"marginLeft" : "-100%"},'2s',function(){
            $(this).children(":first").appendTo($(this));
            $(this).css("marginLeft", 0);
        });
    },3000);

   
    var screenWidth = window.innerWidth;

     window.addEventListener("wheel",function(event){
        event.preventDefault();
        if($html. is(':animated')) return;

        if (screenWidth <= 768) return;

        if(event.deltaY > 0){  
            if(pageIndex >= lastPageIndex) return;
            pageIndex++;
        }
        else if(event.deltaY < 0){ /*deltaY가 음수 이면 scroll up*/
            if(pageIndex <= 0) return;
            pageIndex--;
        }

        var posTop = windowHeight * pageIndex;

        

        $html.animate({scrollTop : posTop + 2});  /* 스크롤 탑을 postop에 맞춘다*/

    },{passive : false});  /*passive 인 상태에서는 기본이벤트에 제거가 안되므로 false를 넣어야함*/

    $window.on("resize",function(){
        windowHeight = $window.height();
    });

    

    console.log(windowHeight);
    console.log($window.width());



    


});





