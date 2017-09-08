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

	function removeClass() {
		$("ul li").removeClass("tab-current");
	}

	$(document).ready(function() {
		removeClass();
	});

	$("#tab1, #tab2, #tab3").on("click", function () {
		$(".tabs").css("margin-top", "-100vh");
		$("#show-header").css("opacity", "1");
		$(".name-info").css("opacity", "0");
		$(".tabs-content").css("border-top", "2px solid transparent");
		$(".icon-angle-down").css("top", "0");
		$("body").css("overflow-y", "scroll");
		$("body").css("overflow-x", "hidden");
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			$(".tabs").css("margin-top", "-80vh");
		}
	});

	$("#show-header").on("click", function () {
		$(".tabs").css("margin-top", "-62px");
		$("#show-header").css("opacity", "0");
		$(".name-info").css("opacity", "1");
		$(".tabs-content").css("border-top", "2px solid #47A3DA");
		$("body").css("overflow-y", "hidden");
		if($( window ).width() <= 1024) {
			$(".tabs").css("margin-top", "-50px");
		}
		setTimeout(removeClass, 500);
	});

})(window);
