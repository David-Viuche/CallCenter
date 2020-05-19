const router = require('express').Router();
const { activar, desactivar, operadorDisponible } = require('../controllers/empleadoController');

router.get('/activar/:id',activar);
router.get('/desactivar/:id',desactivar);
router.get('/operador', operadorDisponible);

module.exports = router;