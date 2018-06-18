// @flow

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const references = require('./references/index');
const random = require('./utils/random');


const api = express.Router();

api.get('/', (req: express$Request, res: express$Response) => {
    res.send('Default response for GET /api\n');
});

api.post('token', (req: express$Request, res: express$Response)=>{
    setTimeout(() => {
        res.json({data: {}, error:{}});
    }, 2000);
})

api.use('/references', references);
api.use('/random', random);

api.use('*', (req: express$Request, res: express$Response) => {
    res.status(404);
    res.send('Not found Api route\n');
});

module.exports = api;
