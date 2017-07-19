const config = {
    port: process.env.PORT || 5000,
    host: '',
    routes: [{
        path: '/',
        name: '../partials/main'
    },{
        path: '/successUrl',
        name: '../examples/payment-by-bill-example/success.html'
    },{
        path: '/failUrl',
        name: '../examples/payment-by-bill-example/fail.html'
    }],
    prv_id: '',
    api_id: '',
    api_password: '',
};

module.exports = config;