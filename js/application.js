$(document).ready(function(){

	// search/form blurs
	$.fn.field = function() {
		return this.focus(function() {
			if( this.value == this.defaultValue ) {
				this.value = "";
			}
		}).blur(function() {
			if( !this.value.length ) {
				this.value = this.defaultValue;
			}
		});
	};
	
	$("input[type=text]").field();

	// search box commit
	$('#submit').click(function(){
		$(this).parent('form').submit();
	});
	
});