const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/', (req, res) => {
  res.send('Modules installed successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
