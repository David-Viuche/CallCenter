const router = require('express').Router();
const { activar, desactivar } = require('../controllers/empleadoController');

router.get('/activar/:id',activar);
router.get('/desactivar/:id',desactivar);


module.exports = router;