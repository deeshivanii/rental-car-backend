const express = require('express');
const router = express.Router();
const pool = require('./connection'); // assuming this exports a pg Pool instance

router.post('/signup', (req, res) => {
  const User = req.body;

  const checkQuery = 'SELECT user_id FROM "User" WHERE first_name = $1';
  pool.query(checkQuery, [User.first_name], (err, result) => {
    if (err) {
      console.error('Error checking user:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (result.rows.length > 0) {
      // User exists
      return res.status(400).json({ message: 'User with this first name already exists' });
    }

    // Insert new user
    const insertQuery = `
      INSERT INTO "User" (first_name, last_name, email, phone, username, password, role)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING user_id
    `;
    const values = [
      User.first_name,
      User.last_name,
      User.email,
      User.phone,
      User.username,
      User.password,
      User.role,
    ];

    pool.query(insertQuery, values, (err, insertResult) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      return res.status(201).json({
        message: 'Successfully Registered',
        userId: insertResult.rows[0].user_id,
      });
    });
  });
});

module.exports = router;

module.exports = router;
