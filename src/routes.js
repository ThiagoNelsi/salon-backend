const routes = require('express').Router();

const validators = {
  salon: require('./validators/salon'),
}

const controllers = {
  salon: require('./controllers/salon'),
}

// Salon
routes.get('/salon', controllers.salon.list);
routes.post('/salon', validators.salon.create(), controllers.salon.create);

// Client

module.exports = routes;
