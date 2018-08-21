const express = require('express');
const qiwiPullRestApi = require('@qiwi/pull-rest-api-node-js-sdk');
const QiwiBillPaymentsApi = require('@qiwi/bill-payments-node-js-sdk');
const { getISOTime } = require('./utils');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const paymentByBill = require('../examples/pull-payments-example/app');
const paymentForMobile = require('../examples/pull-payments-white-label-example/app');
const paymentByRedirect = require('../examples/bill-payments-redirect-example/app');

const configFileName = process.env.NODE_APP_CONFIG || './config';

try {
    config = require(configFileName);
} catch (err) {
    config = {};
    console.log("unable to read file '" + configFileName + "': ", err);
    console.log('see config-sample.js for an example');
}

const app = express();

const {
    host,
    port,
    mobilePayment,
    qiwiWalletPayment,
    checkOutRedirect,
    urls
} = config;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(err, req, res, next) {
    res.status(500).send('Something went wrong...');
});

const fieldsTemp = {
    amount: 0.01,
    ccy: 'RUB',
    user: 'tel:',
    comment: 'demo'
};

const redirectTemp = {
    transaction: '',
    shop: qiwiWalletPayment.prv_id,
    successUrl: `${host}${urls.qiwiWalletPayment.success_url}`,
    failUrl: `${host}${urls.qiwiWalletPayment.fail_url}`
};

const qiwiWalletPaymentClient = new qiwiPullRestApi(
    qiwiWalletPayment.prv_id,
    qiwiWalletPayment.api_id,
    qiwiWalletPayment.api_password
);

const mobilePaymentClient = new qiwiPullRestApi(
    mobilePayment.prv_id,
    mobilePayment.api_id,
    mobilePayment.api_password
);

const clientBillPayments = new QiwiBillPaymentsApi();

app.post(
    '/demo/api/paymentByBill',
    paymentByBill({
        fieldsTemp,
        redirectTemp,
        client: qiwiWalletPaymentClient
    })
);

app.post(
    '/demo/api/paymentForMobile',
    paymentForMobile({
        fieldsTemp,
        client: mobilePaymentClient
    })
);

app.post(
    '/demo/api/createPaymentForm',
    paymentByRedirect({
        client: clientBillPayments,
        public_key: checkOutRedirect.public_key,
        success_url: `${host}${urls.checkOutRedirect.success_url}`
    })
);

app.use('/demo/', express.static('dist'));
app.get('/demo/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Start at ' + port);
});
