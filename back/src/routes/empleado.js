const router = require('express').Router();
const { activar, desactivar } = require('../controllers/empleadoController');

router.post('/activar/:id',activar);
router.post('/desactivar/:id',desactivar);


module.exports = router;