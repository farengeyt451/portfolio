$("#tab2").on("click", function () {
	animateSkills();
});

$(".container-skills").on("mouseover touchstart", function () {
	animateSkills();
});

$(".container-techniques").one("mouseover touchstart", function () {
	animateTechniques();
});

$(".animate").one("mouseover touchstart", function () {
	animateSoftware();
});

$(".container-software").on("mouseover touchstart", function() {
	animateSoftware();
});

function animateSkills() {
	$(".skillbar").each(function(){
		$(this).find(".skillbar-bar").animate({
			width:$(this).attr("data-percent")
		}, 3000);
	});
}

function animateTechniques() {
	$(".count-responsive").prop("Counter", 0).animate({
			Counter: 67
	}, {
			duration: 4000,
			easing: "swing",
			step: function (now) {
			$(".count-responsive").text(Math.ceil(now));
			}
	});
	$(".count-grid").prop("Counter", 0).animate({
			Counter: 58
	}, {
			duration: 4000,
			easing: "swing",
			step: function (now) {
			$(".count-grid").text(Math.ceil(now));
			}
	});
}

function animateSoftware() {
	return $(".skill-box .skills-circle li").each(function(i) {
		var _left, _percent, _right, deg, full_deg, run_duration;
		_right = $(this).find(".bar-circle-right");
		_left = $(this).find(".bar-circle-left");
		_percent = $(this).attr("data-percent");
		deg = 3.6 * _percent;
		if (_percent <= 50) {
			return _right.animate({
				circle_rotate: deg
			}, {
				step: function(deg) {
					$(this).css("transform", "rotate(" + deg + "deg)");
				},
				duration: 3000
			});
		} else {
			full_deg = 180;
			deg -= full_deg;
			run_duration = 1000 * (50 / _percent);
			return _right.animate({
				circle_rotate: full_deg
			}, {
				step: function(full_deg) {
					$(this).css("transform", "rotate(" + full_deg + "deg)");
				},
				duration: run_duration,
				easing: "linear",
				complete: function() {
					run_duration -= 3000;
					_left.css({
						"clip": "rect(0, 150px, 150px, 75px)",
						"background-color": "#8EBD4C"
					});
					return _left.animate({
						circle_rotate: deg
					}, {
						step: function(deg) {
							$(this).css("transform", "rotate(" + deg + "deg)");
						},
						duration: Math.abs(run_duration),
						easing: "linear"
					});
				}
			});
		}
	});
};
