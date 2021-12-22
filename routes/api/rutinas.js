const router = require('express').Router();
const { getAllRoutine, getExerciseByRoutine, getByRoutine } = require('../../models/rutinas.model');

router.get('/ejercicios', async (req, res) => {
    const ejercicios = await getExerciseByRoutine(req.query);
    const nameRoutine = await getByRoutine(req.query);
    const routine = { ejercicios: ejercicios, routine: nameRoutine }
    res.json(routine);
});

router.get('/all', async (req, res) => {
    const rutinas = await getAllRoutine();
    res.json(rutinas);
});



module.exports = router