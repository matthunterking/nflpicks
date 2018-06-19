const express = require('express');
const app = express();
const mongoose= require('mongoose');

const { port, dbURI } = require('./config/environment');
const router = require('./config/router');

mongoose.connect(dbURI);
app.use('/api', router);

app.listen(port, () => console.log(`We are running on port ${port}`));
