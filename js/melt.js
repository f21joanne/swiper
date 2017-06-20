$(function(){
	/* Hamburger Menu */
	$(".hamburger").on("click",function(){
		$(".mobile_menu").addClass("open");
		$(".mega_menu_wrapper li").addClass("t_blue");
	});
	
	$(".btn_close").on("click",function(){
		$(".mobile_menu, .mega_sub").removeClass("open");
		$(".mega_menu_wrapper li").removeClass("t_blue");
	});

	/* Change Submenu Position */
	$('.mega_menu').each(function () {
	    $(this).click(function () {
	        $(this).find('.mega_sub').toggleClass('open');
	    });
	});
})

