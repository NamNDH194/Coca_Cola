const express = require('express');
const app = express();
const routers = require('./routes/V1/index');

app.use(express.json());
app.use('/v1', routers);

module.exports = app;