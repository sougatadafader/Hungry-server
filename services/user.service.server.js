const userDao = require('../dao/user.dao.server')
module.exports = app => {
    createUser = (req, res) =>
        res.json(userDao.createUser(req.body));



    findAllUsers = (req, res) =>
    {
        /*console.log('Function called')
        studentDao.findAllStudents().then(function(students){
            res.json(students)
        })*/
        res.json(userDao.findAllUsers())
    }

    findUserById = (req, res) =>
        res.json(userDao.findUserById(req.params['userId']))

    deleteUser = (req,res) =>
        res.json(userDao.deleteUser(req.params.userId))

    app.delete('/api/user/:userId',deleteUser);
    app.get('/api/user/:userId', findUserById);
    app.get('/api/users', findAllUsers);
    app.post('/api/users', createUser);

}