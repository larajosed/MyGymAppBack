const { executeQuery, executeQueryOne } = require('../utils')

const getAllExercise = () => {
    return executeQuery('SELECT * FROM mygymapp.ejercicios;', []);
};

const getByGroupMuscle = ({ grupoMuscular }) => {
    return executeQuery('SELECT ejercicios.* FROM mygymapp.ejercicios_grupos_musculares JOIN mygymapp.ejercicios ON mygymapp.ejercicios.id = mygymapp.ejercicios_grupos_musculares.ejercicio WHERE grupo_muscular = ?;', [grupoMuscular]);
}

const addExcercise = ({ name, description, url }) => {
    return executeQuery('INSERT INTO ejercicios ( name, description, url) VALUES ( ?, ?, ?)', [name, description, url])
}

module.exports = {
    getAllExercise, getByGroupMuscle, addExcercise
}