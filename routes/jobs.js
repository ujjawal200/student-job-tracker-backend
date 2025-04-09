const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobcontroller');

// Routes
router.post('/', createJob);
router.get('/', getJobs);

module.exports = router;
