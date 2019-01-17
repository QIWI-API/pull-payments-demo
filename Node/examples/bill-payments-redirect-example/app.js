module.exports = ({public_key}) => {
    return (req, res) => {
        const amount = req.body.amount;

        const data = {
            public_key,
            amount
        };

        res.send(data);
    };
};
