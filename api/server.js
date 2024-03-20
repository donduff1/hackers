const express = require('express');
const hackersData = require('./hackers_hu.json'); // Import hackers data

const PORT = process.env.PORT || 3000;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/hackers-data', (req, res) => {
  res.json(hackersData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
