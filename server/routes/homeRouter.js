const {Router} = require('express');

const router = Router();

const homeCtrl = require('../controllers/homeCtrl')

router.get('/moment_list', homeCtrl.momentsList)

router.get('/hot_issue', homeCtrl.hotIssues)

module.exports = router;