export default function(amount) {

    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            amount
        })
    };

    return fetch( url, options );
};