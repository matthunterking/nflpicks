const express = require('express');
const app = express();
const mongoose= require('mongoose');

const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);

app.listen(port, () => console.log(`We are running on port ${port}`));
