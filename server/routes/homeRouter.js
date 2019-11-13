const {Router} = require('express');

const router = Router();

const homeCtrl = require('../controllers/homeCtrl')

router.get('/moment_list', homeCtrl.momentsList)

module.exports = router;