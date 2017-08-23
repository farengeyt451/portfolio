"use strict";
$(document).ready(function () {
		var $form = $(".footer").find("form"),
				$inputName = $form.find("#inputName"),
				$inputEmail = $form.find("#inputEmail"),
				$inputPhoneSkype = $form.find("#inputPhoneSkype"),
				$inputCompany = $form.find("#inputCompany"),
				$inputMessage = $form.find("#inputMessage"),
				$message = $form.find("#message"),
				$btnSend = $form.find("#btnSend"),
				flagName = false,
				flagEmail = false,
				flagMessage = false;

function isEnable() {
	if ((flagName && flagEmail) && (flagEmail && flagMessage) && (flagName && flagMessage)) {
		$btnSend.removeAttr("disabled");
	} else {
		$btnSend.attr("disabled", "disabled");
	}
}

$inputName.on("input paste", function () {
	var value = $(this).val();
	if (valid.isLength(value, 3, 50)) {
			valid.toggleMessage($(this), "name", "length", 3, 50);
			flagName = false;
			$btnSend.attr("disabled", "disabled");
	} else if (valid.isRegExp(value, "name")) {
			valid.toggleMessage($(this), "name", "regExp");
			flagName = false;
			$btnSend.attr("disabled", "disabled");
	} else {
			valid.toggleMessage($(this), "name", true);
			flagName = true;
			isEnable();
	}
});

$inputEmail.on("input paste", function () {
	var value = $(this).val();
	if (valid.isLength(value, 5, 100)) {
			valid.toggleMessage($(this), "email", "length", 5, 100);
			flagEmail = false;
			$btnSend.attr("disabled", "disabled");
	} else if (!valid.isRegExp(value, "email")) {
			valid.toggleMessage($(this), "email", "regExp");
			flagEmail = false;
			$btnSend.attr("disabled", "disabled");
	} else {
			valid.toggleMessage($(this), "email", true);
			flagEmail = true;
			isEnable();
	}
});

$inputPhoneSkype.on("input paste", function () {
	var value = $(this).val();
	if (valid.isLength(value, 5, 100)) {
			valid.toggleMessage($(this), "phone/skype name", "length", 5, 100);
	} else {
			valid.toggleMessage($(this), "phone/skype name", true);
	}
});

$inputCompany.on("input paste", function () {
	var value = $(this).val();
	if (valid.isLength(value, 3, 100)) {
			valid.toggleMessage($(this), "company name", "length", 3, 100);
	} else {
			valid.toggleMessage($(this), "company name", true);
	}
});

$inputMessage.on("input paste", function () {
	var value = $(this).val();
	if (valid.isLength(value, 1)) {
			valid.toggleMessage($(this), "message", "length");
			flagMessage = false;
			$btnSend.attr("disabled", "disabled");
	} else {
			valid.toggleMessage($(this), "message", true);
			flagMessage = true;
			isEnable();
	}
});

$form.submit(function () {
	var dataSet = {
			"имя": $inputName.val(),
			"email": $inputEmail.val(),
			"телефон/skype": $inputPhoneSkype.val(),
			"организация": $inputCompany.val(),
			"сообщение": $inputMessage.val()
	};
	$.ajax({
			method: "POST",
			url: "//formspree.io/strannik11.92@gmail.com",
			dataType: "json",
			data: dataSet,
			success: function () {
					$form[0].reset();
					$.each([$inputName, $inputEmail, $inputPhoneSkype, $inputCompany, $inputMessage], function () {
							valid.toggleMessage($(this), "", true);
					});
					flagName = false; flagEmail = false; flagMessage = false;
					isEnable();
					$message.text("Сообщение отправлено. Спасибо!").slideDown(500);
			},
			error: function(jqXHR, exception) {
					if (jqXHR.status === 0) {
							$message.text("Not connect.\n Verify Network.").slideDown(500);
					} else if (jqXHR.status === 404) {
							$message.text("Requested page not found. [404]").slideDown(500);
					} else if (jqXHR.status === 500) {
							$message.text("Internal Server Error [500].").slideDown(500);
					} else if (exception === "parsererror") {
							$message.text("Requested JSON parse failed.").slideDown(500);
					} else if (exception === "timeout") {
							$message.text("Time out error.").slideDown(500);
					} else if (exception === "abort") {
							$message.text("Ajax request aborted.").slideDown(500);
					} else {
							$message.text("Uncaught Error.\n" + jqXHR.responseText).slideDown(500);
					}
			}
	});
	return false;
});

var $content = $(".content"),
		$contentList = $content.find("a[data-target]");
$contentList.hover(
	function () {
		var target = $(this).attr("data-target");
		$("body").toggleClass(target);
	}
);
});
