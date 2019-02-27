let users = [
    { username: 'alice', _id :123},
    { username: 'ada', _id :234}
]


    createUser= user =>
    {
        if(!user._id)
        {
            user._id = (new Date()).getTime();
        }
        users.push(user)
    }

    deleteUser= userId =>{
        var i;
        num = parseInt(userId)

        for( i=0; i<users.length;i++)
        {
            if(users[i]._id === num ){
                users.splice(i,1);
                break;
            }

        }

        return users;
    }

    findAllUsers = () =>
        users



    findUserById = userId =>
        users.find( user => user._id === parseInt(userId))

module.exports  =
{
        createUser,
        deleteUser,
        findAllUsers,
        findUserById

}