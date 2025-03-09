const express = require('express');
const { getMerch } = require('../controllers/merchController');

const router = express.Router();

router.get('/', getMerch);

module.exports = router;
