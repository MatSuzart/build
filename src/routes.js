const express = require('express');

const BuildController = require('./app/controllers/BuildController');

const router = express.Router();

router.get('/index', (request, response)=>{
    response.send('hello world');
});

modulo.exports = router;