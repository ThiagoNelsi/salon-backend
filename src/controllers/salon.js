const bcrypt = require('bcrypt');
const Salon = require('../models/salon');

module.exports = {

  async list(req, res) {
    const { latitude, longitude, max_distance = 10 } = req.query;
    try {
      const salons = await Salon.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: max_distance * 1000,
          }
        }
      });
      return res.json(salons);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'Cannot list' });
    }
  },

  async create(req, res) {
    const { password, name, description, owner, contact, images } = req.body;
    const location = {
      type: 'Point',
      coordinates: req.body.location,
    }
    const hash = await bcrypt.hash(password, 10);
    try {
      await Salon.create({
        password: hash,
        name,
        description,
        owner,
        location,
        contact,
        images,
      });
      return res.status(204).send();
    } catch (err) {
      console.log(err);
      if (/duplicate key error/.test(err.errmsg)) return res.status(400).json({ error: 'Phone number already registered' });
      return res.status(400).json({ error: 'Cannot create salon' });
    }
  }
}
