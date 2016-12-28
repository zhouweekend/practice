$(function () {

    var cateMenu = function () {
        var cateLiNum = $(".cateMenu li").length;
        $(".cateMenu li").each(function (index, element) {
            if (index < cateLiNum) {
                $(this).mouseenter(function () {
                    var ty = $(this).offset().top - 168;
                    var obj = $(this).find(".list-item");
                    var sh = document.documentElement.scrollTop || document.body.scrollTop;
                    var oy = ty + (obj.height() + 30) + 158 - sh;
                    var dest = oy - $(window).height()
                    if (oy > $(window).height()) {
                        ty = ty - dest - 10;
                    }
                    if (ty < 0) ty = 0;
                    $(this).addClass("on");
                    obj.show();
                    $(".cateMenu li").find(".list-item").stop().animate({ "top": ty });
                    obj.stop().animate({ "top": ty });
					$(this).addClass("hover").siblings().removeClass("hover");
                })
                $(this).mouseleave(function () {
                    $(this).removeClass("on");
                    $(this).find(".list-item").hide();
					$(this).removeClass("hover");
                })
            }
        });

        $(".navCon_on").hover(function(){
            $(".cateMenu").show();
			$(".navCon-cate-title").addClass("hover");
        },
		function () {
		    
			$(".navCon-cate-title").removeClass("hover");
		})
    }();

});