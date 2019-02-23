const userDao = require('../dao/user.dao.server')
module.exports = app => {
    createUser = (req, res) =>
        res.json(userDao.createUser(req.body));

    findAllUsers = (req, res) =>
        res.json(userDao.findAllUsers());

    findUserById = (req, res) =>
    res.json(userDao.findUserById(req.params['userId']))


    app.get('/api/user/:userId', findUserById);
    app.get('/api/users', findAllUsers);
    app.post('/api/users', createUser);

}