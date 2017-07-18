const config = {
    port: process.env.PORT || 5000,
    host: 'http://188.225.76.15:5000',
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
    prv_id: '2042',
    api_id: '59882748',
    api_password: 'U8C1TpaO5mPIGKiln1Vh',
};

module.exports = config;