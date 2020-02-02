const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const AWS = require('aws-sdk');

const configRoutes = require("./routes");
const { PORT, HOST } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api', (req, res) => res.status(200).send('API works.'));

configRoutes(app);

app.listen(PORT, () => {
    console.log(colors.green(`Your routes are running on: ${HOST}:${PORT}`));
});