/**
 * @license Apache-2.0
 * @copyright 2024 Jayson Bull
 */

'use strict';

const checkout = async (req, res) => {
  try {
    const { amount } = req.body;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = { checkout };
