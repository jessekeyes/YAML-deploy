$(document).ready(function(){

	// search/form blurs
	$.fn.search = function() {
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

	$(".ym-searchfield").search();

	// search box commit
	$('#submit-search').click(function(){
		$('#searchFormID').submit();
	});
	
});
