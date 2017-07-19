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

$("#phone-number-payment-bill").on('input', function() {
    if($(this).val().length >= 10 ) {
        $('#buy-payment-bill').prop('disabled', false);
    }
});