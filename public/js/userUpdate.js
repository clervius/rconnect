$(document).on('click', '.updatecardLink', function(){
	$('.updateCardWrap').slideDown(70, function(){
		$('.updatingCard').fadeIn();
	});
})
$(document).on('change', 'radio[name="newAddress"]', function(){
	if($(this).val() == 'newAddy'){
		$('.cc-newaddy').slideDown(70);
	}else{
		$('.cc-newaddy').slideUp(70);
	}
})
