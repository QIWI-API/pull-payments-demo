module.exports = ({fieldsTemp,generateBillId, client}) => {



    return (req, res) =>{

        const fields = Object.assign(fieldsTemp, {
            user: `tel:${req.body.tel}`,
            amount: req.body.amount,
            pay_source: 'mobile'
        });

        bill_id = generateBillId();

        client.createBill(bill_id, fields).then(data => {
            res.send(data);
        });

    };
}