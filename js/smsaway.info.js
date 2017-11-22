(function($){
	var immInvoke, immInvokeFind;
	immInvoke = $('#sel1');
	immInvokeFind = immInvoke.find("option:selected").text();
	$('.input-group-addon').text(immInvoke.val());
	$('.countryEchoer').attr({ "value" : immInvokeFind });
	immInvoke.change(function(){
		var selfThis = $(this);
		var countryMakerThis = selfThis.find("option:selected").text();
		$('.countryEchoer').attr({ "value" : countryMakerThis });
	    $('.input-group-addon').text(selfThis.val());
	    if($(this).val() === '+63'){
	    	$('#leading-zero-instructions').text('Enter a number without the leading zero.');
	    } else {
	    	$('#leading-zero-instructions').text('Enter a number without its country code.');
	    }
	});
}(jQuery));