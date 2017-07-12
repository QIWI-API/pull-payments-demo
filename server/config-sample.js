const config = {
    port: process.env.PORT || 5000,
    host: '',
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
    prv_id: '',
    api_id: '',
    api_password: '',
};

module.exports = config;