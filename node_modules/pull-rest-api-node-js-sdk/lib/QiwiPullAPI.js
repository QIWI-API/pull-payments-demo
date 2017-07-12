const request = require('./request.js');
const URLSearchParams = require('url').URLSearchParams;
const querystring = require('querystring');
/**
 * Class for rest v 2.
 *
 * @class
 */
module.exports = class QiwiPullAPI {
    /**
     * Constructs the object.
     *
     * @param      {(string|number)}  api_id        The api identifier
     * @param      {(string|number)}  api_password  The api password
     * @param      {(string|number)}  prv_id        The prv identifier
     */
    constructor(prv_id, api_id, api_password) {
        this._apiId = api_id;
        this._apiPassword = api_password;
        this._prvId =  prv_id
    }
    /**
     * Api id setter
     *
     * @param      {(string|number)}  api_id        The api
     */
    set apiId(api_id) {
        this._apiId = api_id;
    }
    /**
     * Api password setter
     *
     * @param      {(string|number)}  api_password  The api password
     */
    set apiPassword(api_password) {
        this._apiPassword = api_password;
    }
    /**
     * Provider id setter
     *
     * @param      {(string|number)}  prv_id        The prv
     */
    set prvId(prv_id) {
        this._prvId = prv_id
    }

    /**
     * Build request
     *
     * @param      {Object}  arg1         The argument 1
     * @param      {string}  arg1.url     The url
     * @param      {string}  arg1.method  The method
     * @param      {?string}  arg1.body    The body
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    async _requestBuilder({ url, method, body = null }) {

        const key = new Buffer(`${this._apiId}:${this._apiPassword}`).toString('base64');

        const headers = {
            'Accept': 'text/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${key}`
        };

        const options = {
            hostname: 'api.qiwi.com',
            path: `/api/v2/prv/${this._prvId}/bills/${url}`,
            method,
            headers,
            body: new URLSearchParams(body)
        };

        try {

            const data = await request(options);

            return JSON.parse(data);

        } catch (e) {
            console.error(e.message);
        }
    }
    /**
     * Creating checkout link
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    createBill(bill_id, fields) {

        const options = {
            url: bill_id,
            method: 'PUT',
            body: fields
        };

        return this._requestBuilder(options);
    }
    /**
     * Getting bill status
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getStatus(bill_id) {

        const options = {
            url: bill_id,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
    /**
     * Cancelling unpaid bill
     *
     * @param      {(string|number)}  bill_id  The bill identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    cancel(bill_id) {
        const options = {
            url: bill_id,
            method: 'PATCH',
            body: {
                status: 'rejected'
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Refund by paid bill
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @param      {?(string|number)}  amount     The amount
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    refund(bill_id, refund_id, amount = '') {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'PUT',
            body: {
                amount
            }
        };

        return this._requestBuilder(options);
    }
    /**
     * Get status of refund
     *
     * @param      {(string|number)}  bill_id    The bill identifier
     * @param      {(string|number)}  refund_id  The refund identifier
     * @return     {Promise<Object>|Error}  Return promise with result
     */
    getRefundStatus(bill_id, refund_id) {
        const options = {
            url: `${bill_id}/refund/${refund_id}`,
            method: 'GET'
        };

        return this._requestBuilder(options);
    }
    /**
     * Build url for redirect
     *
     * @param      {Object}  arg1              The argument 1
     * @param      {string}  arg1.shop         The prv id
     * @param      {string}  arg1.transaction  The bill id
     * @param      {string}  arg1.iframe       The iframe
     * @param      {string}  arg1.successUrl   The success url
     * @param      {string}  arg1.failUrl       The fail url
     * @param      {string}  arg1.target       The target
     * @param      {string}  arg1.pay_source   The pay source
     * @return     {string}  Return url for redirecting
     */
    _redirectBuilder(type, {shop = this._prvId, transaction, iframe = false, successUrl = '', failUrl = '', target, pay_source}) {

        const url = `https://bill.qiwi.com/order/external/${type}.action`;

        const params = querystring.stringify({
            shop,
            transaction,
            iframe,
            successUrl,
            failUrl,
            target,
            pay_source
        });

        return `${url}?${params}`;
    }
    /**
     * Url for redirect for exist bill
     *
     * @param      {Object}  options              The options
     * @param      {string}  options.shop         The prv id
     * @param      {string}  options.transaction  The bill id
     * @param      {string}  options.iframe       The iframe
     * @param      {string}  options.successUrl   The success url
     * @param      {string}  options.failUrl       The fail url
     * @param      {string}  options.target       The target
     * @param      {string}  options.pay_source   The pay source
     * @return     {string}  Return url for redirecting
     */
    paymentForm(options) {

        return this._redirectBuilder('main', options);
    }
    /**
     * Url for redirect with creating bill
     *
     * @param      {Object}  options              The options
     * @param      {string}  options.shop         The prv id
     * @param      {string}  options.transaction  The bill id
     * @param      {string}  options.iframe       The iframe
     * @param      {string}  options.successUrl   The success url
     * @param      {string}  options.failUrl       The fail url
     * @param      {string}  options.target       The target
     * @param      {string}  options.pay_source   The pay source
     * @return     {string}  Return url for redirecting
     */
    paymentFormCreatBill(options) {

        return this._redirectBuilder('create', options);
    }
}
