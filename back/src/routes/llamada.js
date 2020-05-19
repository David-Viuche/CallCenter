const router = require('express').Router();
const { nueva } = require('../controllers/llamadaController');

router.get('/nueva/:id',nueva);

module.exports = router;