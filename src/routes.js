const routes = require('express').Router();

const validators = {
  salon: require('./validators/salon'),
}

const controllers = {
  salon: require('./controllers/salon'),
}

// Salon
routes.get('/salon', validators.salon.list(), controllers.salon.list);
routes.post('/salon', validators.salon.create(), controllers.salon.create);
routes.post('/salon/auth', validators.salon.auth(), controllers.salon.auth);
// Client

module.exports = routes;
