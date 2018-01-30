const config = {
    port: process.env.PORT || 5000,
    host: '',
    mobilePayment: {
        prv_id: '',
        api_id: '',
        api_password: ''
    },
    qiwiWalletPayment: {
        prv_id: '',
        api_id: '',
        api_password: ''
    },
    checkOutRedirect: {
        public_key:
            ''
    },
    urls: {
        qiwiWalletPayment: {
            success_url:
                '/?method=qiwiWalletPayment&status=success#qiwiWalletPayment',
            fail_url:
                '/?method=qiwiWalletPayment&status=success#qiwiWalletPayment'
        },
        checkOutRedirect: {
            success_url:
                '/?method=checkOutRedirect&status=success#checkOutRedirect'
        }
    }
};

module.exports = config;
