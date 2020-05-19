const router = require('express').Router();
const { nueva, conectar, espera } = require('../controllers/llamadaController');

router.get('/nueva/:id',nueva);
router.get('/conectar/:idU/:idE',conectar);
router.get('/espera/:idU',espera);

module.exports = router;