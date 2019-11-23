$("#useBilling").click(function() {
	var home = $("#home");
	if (this.checked) {
		console.log("selected");
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true);
	}
	else {
		console.log("unselected");
		$("#home").val("");
		$("#home").prop("disabled", false);
	}
});
