module.exports = ({ fieldsTemp, client }) => {
    return (req, res) => {
        const fields = Object.assign(fieldsTemp, {
            user: `tel:${req.body.tel}`,
            amount: req.body.amount,
            pay_source: 'mobile',
            lifetime: client.getLifetimeByDay()
        });

        bill_id = client.generateId();

        client.createBill(bill_id, fields).then((data) => {
            res.send(data);
        });
    };
};
