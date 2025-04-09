const express = require('express');
const router = express.Router();
const { createJob, getJobs ,updateJobStatus, deleteJob } = require('../controllers/jobcontroller');

// Routes
router.post('/', createJob);
router.get('/', getJobs);
router.patch('/:id', updateJobStatus); // ✅ new
router.delete('/:id', deleteJob);  

module.exports = router;
