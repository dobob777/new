module.exports = app => {
    const routes = require('express').Router()
    const users = require('../controller/userAPI')

    routes.get('/api/list', users.list);
    routes.post('/api/login', users.login);
    routes.delete('/api/delete/:id', users.deleteData);

    app.use('/', routes);
}