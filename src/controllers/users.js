const users = [
    {id: 1, nombre: 'gary', edad: 20},
    {id: 2, nombre: 'luz', edad: 21},
    {id: 3, nombre: 'aldo', edad: 21}
]


const getUsers = (req, res) =>{
    res.render('users', {users: users})
}

const createUsers = (req, res) => {
    res.render('create_user')
}

const updateUsers = (req, res) => {
    res.render('update_user')
}

const deleteUsers = (req, res) => {
    res.render('delete_user')
}

module.exports = {getUsers, createUsers, updateUsers, deleteUsers}