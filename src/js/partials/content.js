$("#tab2").on("click", function () {
	animateSkills();
});

function animateSkills() {
	$(".skillbar").each(function(){
		$(this).find(".skillbar-bar").animate({
			width:$(this).attr("data-percent")
		},3000);
	});
}
