const router = require('express').Router();
const { iniciarSesion, registrarse, verificar } = require('../controllers/sesionController');

router.post('/signin',iniciarSesion);
router.post('/signup',registrarse);
router.get('/verificar/:id',verificar);

module.exports = router;