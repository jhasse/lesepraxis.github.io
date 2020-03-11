$(document).ready(function() {
	$("#expand-why").click(function(e) {
		$("#more-why").slideToggle('slow');
		$("#expand-why").remove();
		e.preventDefault();
	});
	$("#expand-which-1").click(function(e) {
		$("#which-1").slideToggle('slow');
		e.preventDefault();
	});
	$("#expand-which-2").click(function(e) {
		$("#which-2").slideToggle('slow');
		e.preventDefault();
	});
	$("#expand-which-3").click(function(e) {
		$("#which-3").slideToggle('slow');
		e.preventDefault();
	});
});
