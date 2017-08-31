
$( document ).ready(function() {
	$(".logo").fadeIn(2500);
	pullHeaderImg();
});

function pullHeaderImg() {
	var vWidth = $( window ).width();
	if (vWidth < 768) {
		$(".logo").append("<\img src = \"img/header-text-sm-screens.svg\" alt=\"logo &amp; initials\">");
	} else {
		$(".logo").append("<\img src = \"img/header-text.svg\" alt=\"logo &amp; initials\">");
	}
}
