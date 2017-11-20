/*paymentForMobile*/
export default function(url, phoneNumber, amount) {

    const options = {
        method: 'POST',
        dataType: 'json',
        data: {
            tel: phoneNumber,
            amount
        }
    };

    return fetch( url, options );
};