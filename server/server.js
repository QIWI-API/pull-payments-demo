const express = require('express');
const qiwiRestApi = require('pull-rest-api-node-js-sdk');
const crypto = require('crypto');
const bodyParser = require('body-parser');

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


function randomValueHex(len) {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len);   // return required number of characters
}

function generateBillId() {
    return `demo${randomValueHex(7)}`;
}

function generateRenderedRoutes (routes, rootTemp) {
    routes.forEach(route => {
        app.get(route.path, (req, res) =>{
            res.render( rootTemp, { page: route.name});
        });
    });
}

function getISOTime() {
    const date =  new Date();

    timePlused = date.getTime() + (24*60*60*1000);

    date.setTime(timePlused);

    return date.toISOString();
}

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',express.static('public'));

generateRenderedRoutes(routes, '../public/index.ejs');


const fieldsTemp = {
    amount: 0.01,
    ccy: 'RUB',
    lifetime: getISOTime(),
    user: 'tel:'
};

const redirectOptionsTemp = {
    transaction: '',
    shop: prv_id,
    successUrl:`${host}/${successPath}`,
    failUrl: `${host}/${failPath}`
};


const client = new qiwiRestApi(prv_id, api_id, api_password);

app.post('/paymentByBill', (req, res) =>{

    const fields = fieldsTemp;

    const redirectOptions = redirectOptionsTemp;

    const bill_id = generateBillId();

    fields.user = `tel:${req.body.tel}`;

    client.createBill(bill_id, fields).then(data => {

        redirectOptions.transaction = bill_id;

        const redirect = client.paymentForm(redirectOptions);

        data.redirect = redirect;

        res.send(data);
    });

});


app.post('/paymentForMobile', (req, res) =>{

    const fields = fieldsTemp;

    fields.amount = 5;
    fields.pay_source = 'mobile';
    fields.user =  `tel:${req.body.tel}`;

    bill_id = generateBillId();

    client.createBill(bill_id, fields).then(data => {
        res.send(data);
    });

});


app.listen(port, (err) =>  {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Start at ' + port);
});