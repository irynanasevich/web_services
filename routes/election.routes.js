const Router = require('express');
const router = new Router;
const ElectionController  = require('../controller/election.controller');

router.post('/election', ElectionController.createElection);
router.get('/election', ElectionController.getElectionsByCandidate);

module.exports = router;
