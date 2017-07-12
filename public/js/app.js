
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$('#phone-number-payment-bill').val('');

$('#buy-payment-bill').click(function() {

    var phoneNumber = '+7'+$('#phone-number-payment-bill').val();

    var options = {
        url: '/paymentByBill',
        method: 'POST',
        dataType: 'json',
        data: {
            tel: phoneNumber
        }
    };

    $.when($.ajax(options)).then(function(data){
        console.log(data);
        window.location.href = data.redirect;
    });

});


$('#buy-payment-mobile').click(function() {

    var phoneNumber = '+7'+$('#phone-number-payment-mobile').val();

    var options = {
        url: '/paymentForMobile',
        method: 'POST',
        dataType: 'json',
        data: {
            tel: phoneNumber
        }
    };

    $.when($.ajax(options)).then(function(data){
        console.log(data);
        $('#carousel-mobile-payment').carousel('next');
        /*$('#panel-mobile-payment').addClass('panel-hidden');
        $('#panel-try-again').removeClass('panel-hidden');

*/    });

});

$('#refresh').click(function(event) {
    /*$('#panel-mobile-payment').removeClass('panel-hidden');
    $('#panel-try-again').addClass('panel-hidden');

    $('#method-payment-panel-mobile').removeClass('panel-hidden');
    $('#telephone-number-panel-mobile').addClass('panel-hidden');

    $('#buy-payment-mobile').prop('disabled', true);

    $('#qiwi-payment-mobile').prop('checked', false);*/
    $('#buy-payment-mobile').prop('disabled', true);
    $('#phone-number-payment-mobile').val('');
    $('#carousel-mobile-payment').carousel(0);
});

/*$('#qiwi-payment').change(function() {
    $('#method-payment-panel').addClass('panel-hidden');
    $('#telephone-number-panel').removeClass('panel-hidden');
})*/

$("#phone-number-payment-bill").on('input', function() {
    if($(this).val().length >= 10 ) {
        $('#buy-payment-bill').prop('disabled', false);
    }
});


/*$('#qiwi-payment-mobile').change(function() {
    $('#method-payment-panel-mobile').addClass('panel-hidden');
    $('#telephone-number-panel-mobile').removeClass('panel-hidden');
})*/

$("#phone-number-payment-mobile").on('input', function() {
    if($(this).val().length >= 10 ) {
        $('#buy-payment-mobile').prop('disabled', false);
    }
});

