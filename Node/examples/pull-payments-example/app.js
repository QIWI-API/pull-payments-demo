module.exports = ({ fieldsTemp, redirectTemp, client }) => {
    return (req, res) => {
        const fields = Object.assign(fieldsTemp, {
            user: `tel:${req.body.tel}`,
            amount: req.body.amount,
            pay_source: 'qw',
            lifetime: client.getLifetimeByDay()
        });

        const redirectOptions = redirectTemp;

        const bill_id = client.generateId();

        client.createBill(bill_id, fields).then((data) => {
            redirectOptions.transaction = bill_id;

            const redirect = client.createPaymentForm(redirectOptions);

            data.redirect = redirect;

            res.send(data);
        });
    };
};
