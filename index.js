const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const errorHandler = require('./lib/errorHandler');

const { port, dbURI } = require('./config/environment');
const router = require('./config/router');

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => console.log(`We are running on port ${port}`));

module.exports = app;
