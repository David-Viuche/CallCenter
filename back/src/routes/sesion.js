const router = require('express').Router();
const { iniciarSesion, registrarse } = require('../controllers/sesionController');

router.post('/signin',iniciarSesion);
router.post('/signup',registrarse);

module.exports = router;