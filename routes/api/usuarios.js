const router = require('express').Router();
const { create, getAll, getbyEmailPassword } = require('../../models/usuarios.model')


router.get('/all', async (req, res) => {
    const usuarios = await getAll();
    res.json(usuarios);
});


router.post('/registro', async (req, res) => {
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message })
    }
});


router.post('/login', async (req, res) => {
    const usuario = await getbyEmailPassword(req.body);
    if (usuario) {
        return res.json(usuario)
    } else {
        return res.json({ error: 'El usuario y/o password no son correctos' });
    }
});




module.exports = router