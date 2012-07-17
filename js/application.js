$(document).ready(function(){

	// search/form blurs
	$(function(){
		$('.ym-searchfield').data('holder',$('.ym-searchfield').attr('placeholder'));
		$('.ym-searchfield').focusin(function(){
		    $(this).attr('placeholder','');
		});
		$('.ym-searchfield').focusout(function(){
		    $(this).attr('placeholder',$(this).data('holder'));
		});
	});

	// search box commit
	$('#submit').click(function(){
		$(this).parent('form').submit();
	});
	
});