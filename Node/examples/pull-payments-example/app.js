module.exports = ({fieldsTemp, redirectTemp, generateBillId, client}) => {


    return (req, res) =>{

        const fields = Object.assign(fieldsTemp, {
            user: `tel:${req.body.tel}`,
            amount: req.body.amount,
            pay_source: 'qw'
        });

        const redirectOptions = redirectTemp;

        const bill_id = generateBillId();

        client.createBill(bill_id, fields).then(data => {

            redirectOptions.transaction = bill_id;

            const redirect = client.paymentForm(redirectOptions);

            data.redirect = redirect;

            res.send(data);
        });

    };
}