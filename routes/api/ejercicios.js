const router = require('express').Router();


const { getAllExercise, getByGroupMuscle, addExcercise } = require('../../models/ejercicios.model');

router.get('/all', async (req, res) => {
    const ejercicios = await getAllExercise();
    res.json(ejercicios);
});

router.get('/muscle', async (req, res) => {
    const grupoMuscular = await getByGroupMuscle(req.query);
    res.json(grupoMuscular);
})

router.post('/add', async (req, res) => {
    try {
        const result = await addExcercise(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});

module.exports = router;