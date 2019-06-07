$(document).ready(function(){
    var tops = [];
    $(".fadeout").each(function(i, e) {
        tops[i] = $(this).offset().top;
    });
    //alert(tops);
    $(".fadeout").hide();
	var h3_height = document.documentElement.clientHeight;
	
	$(window).scroll(function(){
		var this_scrollTop = $(this).scrollTop();
		
		var scroll = this_scrollTop + (h3_height / 1.2);
        $(".fadeout").each(function(i, e) {
            var top = tops[i];
            if (scroll >= top && $(this).is(':hidden')) {
                $(this).show();
                //alert("top=" + top + "\noffsettop=" + $(this).offset().top + "\nscroll=" + scroll + "\n展示啦！")
            }
        })
	});
	
});