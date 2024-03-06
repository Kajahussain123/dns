const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

router.get('/api/domains', domainController.getDomains);
router.post('/api/domains', domainController.createDomain);
router.put('/api/domains/:domainId', domainController.updateDomain);

router.delete('/api/domains/:domainId', domainController.deleteDomain);


module.exports = router;
