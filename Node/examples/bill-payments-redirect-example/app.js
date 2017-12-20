module.exports = ({client, public_key, generateBillId, success_url = ''}) => {

    return (req, res) =>{

        const amount = req.body.amount;

        const bill_id = generateBillId();

        const redirect = client.createPaymentForm({public_key, amount, bill_id, success_url});

        const data = {
            redirect
        };

        res.send(data);
    };
}