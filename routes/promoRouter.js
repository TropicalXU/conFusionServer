const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

//----promotions route
promoRouter.route('/')
.all((req, res , next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promos to you!');
})
.post((req, res, next) => {
    res.end('Will add the promo: ' + req.body.name 
    + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
})
.delete((req, res, next) => {
    res.end('Deleting all promos');
});

//----promotions/promoId route
promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end('Will send the details of the promo: ' + req.params.promoId + ' to you.');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promos/ ' + req.params.promoId);
})
.put((req, res, next) => {
    res.write('Updating the promo: ' + req.params.promoId + '\n');
    res.end('Will update the promo: ' + req.body.name + ' with details : ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promo: ' + req.params.promoId);
});

module.exports = promoRouter;