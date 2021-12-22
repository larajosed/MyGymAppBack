const { executeQuery, executeQueryOne } = require('../utils')

const create = ({ nombre, apellidos, email, username, password, genero, fecha_nacimiento, direccion }) => {
    return executeQuery('INSERT INTO usuarios(nombre, apellidos, email, username, password, genero, fecha_nacimiento, direccion) VALUES(?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, email, username, password, genero, fecha_nacimiento, direccion])
}

const getAll = () => {
    return executeQuery('SELECT * FROM mygymapp.usuarios', []);
}


const getbyEmailPassword = ({ email, password }) => {
    console.log({ email, password });
    return executeQueryOne('SELECT * FROM mygymapp.usuarios WHERE email = ? AND password = ?',
        [email, password]);
}
module.exports = {
    create, getAll, getbyEmailPassword
}
