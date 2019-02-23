let users = [
    { username: 'alice', _id :123},
    { username: 'ada', _id :234}
]

module.exports =() =>
{
    createUser= user =>
        users.push(user)


    findAllUsers = () =>
        users


    findUserById = userId =>
        users.find( user => user._id === parseInt(userId))


    return{
        createUser,
        findAllUsers,
        findUserById
    }
}