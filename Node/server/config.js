const config = {
    port: process.env.PORT || 5000,
    host: '',
    prv_id: '',
    api_id: '',
    api_password: '',
    public_key: '',
    urls: {
        qiwiWalletPayment: {
            success_url: '',
            fail_url: ''
        },
        checkOutRedirect: {
            success_url: ''
        }
    }
};

module.exports = config;
