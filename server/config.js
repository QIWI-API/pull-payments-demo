const config = {
    port: process.env.PORT || 5000,
    host: 'http://188.225.76.15:5000',
    routes: [{
        path: '/',
        name: 'main'
    },{
        path: '/successUrl',
        name: 'success'
    },{
        path: '/failUrl',
        name: 'fail'
    }],
    prv_id: '2042',
    api_id: '59882748',
    api_password: 'U8C1TpaO5mPIGKiln1Vh',
};

module.exports = config;