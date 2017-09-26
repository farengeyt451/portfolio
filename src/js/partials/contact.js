function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	try {
			var successful = document.execCommand("copy");
			if (successful) {
				if (element === "#mail") {
					styleBtnScl("#mailbtn");
				} else if (element === "#phone") {
					styleBtnScl("#phonebtn");
				} else if (element === "#skype") {
					styleBtnScl("#skypebtn");
				} else {
					styleBtnScl("#githbtn");
				}
			}
		} catch (err) {
			alert("Oops, unable to copy, this problem can be if you use IE");
		} finally {
			$temp.remove();
		}
	}

function styleBtnScl(btn) {
	$(btn).css("background-color", "#8EBD4C");
	$(btn).text("Done");
	setTimeout(function() {
			styleBtnBack(btn);
	}, 2000);
}

function styleBtnBack(btn) {
	$(btn).css("background-color", "#47A3DA");
	$(btn).text("Copy");
}

function styleBtnEr(btn) {
	$(btn).css("background-color", "#ED4337");
	$(btn).text("Error");
}
