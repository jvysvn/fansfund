/**
 * @license Apache-2.0
 * @copyright 2024 Jayson Bull
 */

'use strict';

/**
 * node modules
 */
const router = require('express').Router();

/**
 * custom module
 */
const { checkout } = require('../controllers/checkout.controller');

router.post('/', checkout);

module.exports = router;
