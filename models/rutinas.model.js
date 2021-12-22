const { executeQuery, executeQueryOne } = require('../utils')


const getAllRoutine = () => {
    return executeQuery('SELECT * FROM  rutinas;', []);
}


const getExerciseByRoutine = ({ routine }) => {
    return executeQuery('SELECT ejercicios.*, repetitions FROM ejercicios JOIN rutinas_ejercicios on ejercicios.id = rutinas_ejercicios.ejercicio WHERE rutina = ?', [routine]);
}

const getByRoutine = ({ routine }) => {
    return executeQueryOne('SELECT name FROM mygymapp.rutinas WHERE id = ?', [routine]);
}

module.exports = {
    getExerciseByRoutine, getAllRoutine, getByRoutine
}