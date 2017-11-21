/*'/paymentByBill'*/
export default function(url, phoneNumber, amount) {

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tel: phoneNumber,
            amount
        })
    };

    return fetch( url, options );
};