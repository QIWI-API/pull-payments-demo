/*'/paymentByBill'*/
export default function(url, phoneNumber) {

    const options = {
        method: 'POST',
        dataType: 'json',
        data: {
            tel: phoneNumber
        }
    };

    return fetch( url, options );
};