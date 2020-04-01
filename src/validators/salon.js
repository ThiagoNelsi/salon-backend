const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  list() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        longitude: Joi.number().required(),
        latitude: Joi.number().required(),
        max_distance: Joi.number().optional()
      })
    });
  },
  create() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        location: Joi.array().length(2).required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        owner: Joi.string().required(),
        contact: Joi.string().min(10).max(11).required(),
        images: Joi.array(),
      })
    });
  },
}
