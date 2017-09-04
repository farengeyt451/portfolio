function calcVH() {
	$("body,html").innerHeight($(this).innerHeight());
}
(function($) {
	calcVH();
	$(window).on("orientationchange resize", function() {
		calcVH();
	});
})(jQuery);
