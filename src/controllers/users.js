const getUsers = (req, res) =>{
    res.send('Mostrando los usuarios')
}

const createUsers = (req, res) => {
    res.send('Crear Usuario')
}

const updateUsers = (req, res) => {
    res.send('Modificar Usuario')
}

const deleteUsers = (req, res) => {
    res.send('Eliminar Usuario')
}

module.exports = {getUsers, createUsers, updateUsers, deleteUsers}