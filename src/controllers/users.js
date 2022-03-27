const path = require('path')
const root = path.join(__dirname, '../public')

const getUsers = (req, res) =>{
    res.sendFile('users.html',{root: root})
}

const createUsers = (req, res) => {
    res.sendFile('create_user.html',{root: root})
}

const updateUsers = (req, res) => {
    res.sendFile('update_user.html',{root: root})
}

const deleteUsers = (req, res) => {
    res.sendFile('delete_user.html',{root: root})
}

module.exports = {getUsers, createUsers, updateUsers, deleteUsers}