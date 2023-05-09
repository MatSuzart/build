const express = require('express');

const BuildController = require('./app/controllers/BuildController');

const router = express.Router();

/*router.get('/index', (request, response)=>{
    response.send('hello world');
});
*/
router.get('/products', BuildController.index);
router.get('/produts/:id',BuildController.show);
router.get('/produts/:id',BuildController.delete);

modulo.exports = router;