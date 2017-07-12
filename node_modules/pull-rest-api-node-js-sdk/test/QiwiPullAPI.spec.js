const QiwiPullAPI = require('../lib/QiwiPullAPI');
const chai = require('chai');

const assert = chai.assert;

const prv_id = 481466;
const api_id = '59058292';
const api_password = 'MzAci8yl2NZgmoZDMZRD';

const qiwiRestApi = new QiwiPullAPI(prv_id, api_id, api_password);

qiwiRestApi.prvId = prv_id;
qiwiRestApi.apiPassword = api_password;
qiwiRestApi.apiId = api_id;

const billId = 'testBillplatieAga';
const refundId = '';
const amount = '';

const fields = {
    amount: 1,
    ccy: 'RUB',
    comment: 'test',
    lifetime: '2017-07-25T09:00:00',
    user: 'tel:+79995611695'
};

describe('qiwi api v2', function() {
    it('creates payment form', function(done) {
        qiwiRestApi.createBill(billId, fields).then(data => {

            assert.equal(data.response.result_code, '215');
            done();
        });
    });

    it('returns valid bill status', function(done) {
        qiwiRestApi.getStatus(billId).then(data => {
            assert.equal(data.response.result_code, '0');
            done();
        });
    });

    it('cancels bill', function(done) {
        qiwiRestApi.cancel(billId).then(data => {
            assert.equal(data.response.result_code, '78');
            done();
        });
    });

    it('get redirect url', function(done) {

        options = {
            transaction: billId,
            iframe: true,
            successUrl:'https://example.com/successUrl',
            failUrl: 'https://example.com/failUrl',
            pay_source: 'mobile'
        };

        result = qiwiRestApi.paymentForm(options);

        assert.equal('https://bill.qiwi.com/order/external/main.action?shop=481466&transaction=testBillplatieAga&iframe=true&successUrl=https%3A%2F%2Fexample.com%2FsuccessUrl&failUrl=https%3A%2F%2Fexample.com%2FfailUrl&target=&pay_source=mobile', result);

        done();

    });
});

/*qiwiRestApi.refund(billId, refundId, amount).then(data => {
    console.log(data);
});



qiwiRestApi.getRefundStatus(billId, refundId).then(data => {
    console.log(data);
});*/