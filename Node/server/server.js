const express = require('express');
const qiwiRestApi = require('pull-rest-api-node-js-sdk');
const { generateBillId, getISOTime } = require('./utils');
const bodyParser = require('body-parser');
const EJS = require('ejs');

const paymentByBill = require('../examples/pull-payments-example/app');
const paymentForMobile = require('../examples/pull-payments-white-label-example/app');


const configFileName = './config'

try {
    config = require(configFileName);
}
catch (err) {
    config = {};
    console.log("unable to read file '" + configFileName + "': ", err);
    console.log("see config-sample.js for an example");
}

const app = express();

const { host, port, routes, prv_id, api_id, api_password } = config;

const successPath = routes[1].path;
const failPath = routes[2].path;

app.use('/',express.static('dist'));

const fieldsTemp = {
    amount: 0.01,
    ccy: 'RUB',
    lifetime: getISOTime(),
    user: 'tel:',
    comment: 'demo'
};

const redirectOptionsTemp = {
    transaction: '',
    shop: prv_id,
    successUrl:`${host}/${successPath}`,
    failUrl: `${host}/${failPath}`
};


const client = new qiwiRestApi(prv_id, api_id, api_password);


app.post('/paymentByBill', paymentByBill({
    fieldsTemp,
    redirectOptionsTemp,
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