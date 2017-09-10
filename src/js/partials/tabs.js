;(function(window) {
	"use strict";

	function extend(a, b) {
		for(var key in b) {
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function CBPFWTabs(el, options) {
		this.el = el;
		this.options = extend({}, this.options );
			extend(this.options, options);
			this._init();
	}

	CBPFWTabs.prototype.options = {
		start : 0
	};

	CBPFWTabs.prototype._init = function() {
		this.tabs = [].slice.call( this.el.querySelectorAll("nav > ul > li"));
		this.items = [].slice.call( this.el.querySelectorAll(".content > section"));
		this.current = -1;
		this._show();
		this._initEvents();
	};

	CBPFWTabs.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach(function(tab, idx) {
			tab.addEventListener("click", function(ev) {
				ev.preventDefault();
				self._show(idx);
			});
		});
	};

	CBPFWTabs.prototype._show = function(idx) {
		if(this.current >= 0 ) {
			this.tabs[this.current].className = "";
			this.items[this.current].className = "";
		}
		this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
		this.tabs[this.current].className = "tab-current";
		this.items[this.current].className = "content-current";

	};

	window.CBPFWTabs = CBPFWTabs;

})(window);

$(document).ready(function() {
	removeClass();
	showTabs();
});

$("#tab1, #tab2, #tab3").on("click", function () {
	moveTabsTop();
	showArrow();
	hideNameInfo();
});

$("#arrow-down").on("click", function () {
	moveTabsDown();
	hideArrow();
	showNameInfo();
	setTimeout(removeClass, 250);
});

function removeClass() {
	$("ul li").removeClass("tab-current");
}

function showTabs() {
	$(".tabs").css("margin-top", "-62px");
	if($(window).width() <= 1024) {
		$(".tabs").css("margin-top", "-50px");
	}
}

function moveTabsTop() {
	$("body").css("overflow-y", "scroll");
	$("body").css("overflow-x", "hidden");
	$(".tabs").css("top", "0");
	$(".tabs").css("margin-top", "0");
	$(".tabs-content").css("border-top", "2px solid transparent");
}

function moveTabsDown() {
	$("body").css("overflow-y", "hidden");
	$(".tabs").css("top", "100%");
	$(".tabs-content").css("border-top", "2px solid #47A3DA");
	setTimeout(showTabs, 500);
}

function showArrow() {
	$(".icon-angle-down").css("top", "0");
	$(".icon-angle-down").css("opacity", "1");
}

function hideArrow() {
	$(".icon-angle-down").css("opacity", "0");
	$(".icon-angle-down").css("top", "-100px");
}

function showNameInfo() {
	$(".name-info").css("opacity", "1");
}

function hideNameInfo() {
	$(".name-info").css("opacity", "0");
}
