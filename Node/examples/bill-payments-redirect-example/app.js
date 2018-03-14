module.exports = ({ client, public_key, success_url = '' }) => {
    return (req, res) => {
        const amount = req.body.amount;

        const bill_id = client.generateId();

        const redirect = client.createPaymentForm({
            public_key,
            amount,
            bill_id,
            success_url
        });

        const data = {
            redirect
        };

        res.send(data);
    };
};
