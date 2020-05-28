const router = require('express').Router();
const { nueva, conectar, espera, terminar, estado } = require('../controllers/llamadaController');

router.get('/nueva/:id',nueva);
router.get('/conectar/:idU/:idE',conectar);
router.get('/espera/:idU',espera);
router.get('/terminar/:idLlamada',terminar);
router.get('/estado/:idLlamada',estado);

module.exports = router;