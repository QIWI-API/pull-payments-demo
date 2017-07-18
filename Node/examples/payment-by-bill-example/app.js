module.exports = ({fieldsTemp, redirectOptionsTemp,generateBillId, client}) => {

    return (req, res) =>{

        const fields = fieldsTemp;

        const redirectOptions = redirectOptionsTemp;

        const bill_id = generateBillId();

        fields.user = `tel:${req.body.tel}`;

        client.createBill(bill_id, fields).then(data => {

            redirectOptions.transaction = bill_id;

            const redirect = client.paymentForm(redirectOptions);

            data.redirect = redirect;

            res.send(data);
        });

    };
}