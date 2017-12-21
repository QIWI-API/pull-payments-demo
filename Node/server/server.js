const express = require('express');
const qiwiPullRestApi = require('pull-rest-api-node-js-sdk');
const QiwiBillPaymentsApi = require('bill-payments-rest-api-node-js-sdk');
const { generateBillId, getISOTime } = require('./utils');
const bodyParser = require('body-parser');
const cors = require('cors');



const paymentByBill = require('../examples/pull-payments-example/app');
const paymentForMobile = require('../examples/pull-payments-white-label-example/app');
const paymentByRedirect = require('../examples/bill-payments-redirect-example/app');


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

const { host, port, prv_id, api_id, api_password, public_key, urls } = config;

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


const redirectTemp = {
    transaction: '',
    shop: prv_id,
    successUrl:`${host}${urls.qiwiWalletPayment.success_url}`,
    failUrl: `${host}${urls.qiwiWalletPayment.fail_url}`
};




const clientPull = new qiwiPullRestApi(prv_id, api_id, api_password);

const clientBillPayments = new QiwiBillPaymentsApi();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});




app.post('/paymentByBill', paymentByBill({
    fieldsTemp,
    redirectTemp,
    generateBillId,
    client: clientPull
}));


app.post('/paymentForMobile', paymentForMobile({
    fieldsTemp,
    generateBillId,
    client: clientPull
}));


app.post('/createPaymentForm',paymentByRedirect({
    generateBillId,
    client: clientBillPayments,
    public_key,
    success_url: `${host}${urls.checkOutRedirect.success_url}`
}));





app.listen(port, (err) =>  {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Start at ' + port);
});