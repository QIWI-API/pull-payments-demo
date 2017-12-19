module.exports = ({client, public_key, generateBillId}) => {

    return (req, res) =>{

        const amount = req.body.amount;

        const bill_id = generateBillId();

        const redirect = client.createPaymentForm(public_key, amount, bill_id);

        data.redirect = redirect;

        res.send(data);
    };
}