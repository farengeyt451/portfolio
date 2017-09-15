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
					styleBtnScl("#gplusbtn");
				}
			}
			// var msg = successful ? "successful" : "unsuccessful";
			// console.log("Copying text command was " + msg);
		} catch (err) {
			alert("Oops, unable to copy, this problem can be i you use IE");
		} finally {
			$temp.remove();
		}
	}

function styleBtnScl(btn) {
	$(btn).css("background-color", "#8EBD4C");
	$(btn).text("Done");
}

function styleBtnEr(btn) {
	$(btn).css("background-color", "#ED4337");
	$(btn).text("Error");
}
