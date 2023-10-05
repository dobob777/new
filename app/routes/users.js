module.exports = app => {
    const routes = require('express').Router()
    const users = require('../controller/userAPI')

    routes.get('/api/sing-up', users.singUp);

    app.use('/', routes);
}