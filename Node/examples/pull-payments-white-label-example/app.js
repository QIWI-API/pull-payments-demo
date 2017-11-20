module.exports = ({fieldsTemp,generateBillId, client}) => {

    return (req, res) =>{

        const fields = fieldsTemp;

        fields.amount = req.body.amount;;
        fields.pay_source = 'mobile';
        fields.user =  `tel:${req.body.tel}`;

        bill_id = generateBillId();

        client.createBill(bill_id, fields).then(data => {
            res.send(data);
        });

    };
}