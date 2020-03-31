const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        location: Joi.array().length(2).required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        owner: Joi.string().required(),
        contact: Joi.object().keys({
          whatsapp: Joi.string().allow(""),
          telephone: Joi.string().allow(""),
        }),
        images: Joi.array(),
      })
    });
  }
}
