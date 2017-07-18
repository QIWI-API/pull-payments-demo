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
    });

});

$('#refresh').click(function(event) {
    $('#buy-payment-mobile').prop('disabled', true);
    $('#phone-number-payment-mobile').val('');
    $('#carousel-mobile-payment').carousel(0);
});


$("#phone-number-payment-mobile").on('input', function() {
    if($(this).val().length >= 10 ) {
        $('#buy-payment-mobile').prop('disabled', false);
    }
});
