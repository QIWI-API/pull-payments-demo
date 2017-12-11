const express = require('express');
const qiwiRestApi = require('pull-rest-api-node-js-sdk');
const { generateBillId, getISOTime } = require('./utils');
const bodyParser = require('body-parser');
const cors = require('cors');



const paymentByBill = require('../examples/pull-payments-example/app');
const paymentForMobile = require('../examples/pull-payments-white-label-example/app');


const configFileName = process.env.NODE_APP_CONFIG || './config';

try {
    config = require(configFileName);
}
catch (err) {
    config = {};
    console.log("unable to read file '" + configFileName + "': ", err);
    console.log("see config-sample.js for an example");
}

const app = express();

const { host, port, prv_id, api_id, api_password } = config;

app.use('/',express.static('dist'));

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


const fieldsTemp = {
    amount: 0.01,
    ccy: 'RUB',
    lifetime: getISOTime(),
    user: 'tel:',
    comment: 'demo'
};


const redirectionBlock = (host, prv_id, method ) => {

    return {
        transaction: '',
        shop: prv_id,
        successUrl:`${host}/?method=${method}&status=success#${method}`,
        failUrl: `${host}/?method=${method}&status=error#${method}`
    };
}



const client = new qiwiRestApi(prv_id, api_id, api_password);




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



const qiwiWalletPaymentRedirection = redirectionBlock(host, prv_id, 'qiwiWalletPayment');

app.post('/paymentByBill', paymentByBill({
    fieldsTemp,
    redirectTemp: qiwiWalletPaymentRedirection,
    generateBillId,
    client
}));


app.post('/paymentForMobile', paymentForMobile({
    fieldsTemp,
    generateBillId,
    client
}));




app.listen(port, (err) =>  {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Start at ' + port);
});