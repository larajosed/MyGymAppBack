var express = require('express');
var router = express.Router();



const apiUsuarios = require('./api/usuarios');
const apiEjercicios = require('./api/ejercicios');
const apiRutinas = require('./api/rutinas');


router.use('/usuarios', apiUsuarios);
router.use('/ejercicios', apiEjercicios);
router.use('/rutinas', apiRutinas);



module.exports = router;