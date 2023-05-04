const express = require('express');

const router = require('./routes')

const app = express();

app.use(routes);

app.listen(3000,()=>console.log('server started at localhost') );

 