const config = {
    port: process.env.PORT || 5000,
    host: '',
    routes: [{
        path: '/',
        name: '../partials/main'
    },{
        path: '/successUrl',
        name: '../examples/pull-payments-example/success.html'
    },{
        path: '/failUrl',
        name: '../examples/pull-payments-white-label-example/fail.html'
    }],
    prv_id: '',
    api_id: '',
    api_password: ''
};

module.exports = config;