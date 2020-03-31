const crypto = require('crypto');
const Salon = require('../models/salon');

module.exports = {

  async list(req, res) {
    try {
      const salons = await Salon.find();
      return res.json(salons);
    } catch (err) {
      return res.status(400).json({ error: 'Cannot list' });
    }
  },

  async create(req, res) {
    const { name, description, owner, contact, images } = req.body;
    const location = {
      type: 'Point',
      coordinates: req.body.location,
    }
    try {
      await Salon.create({
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
      return res.status(400).json({ error: 'Cannot create salon' });
    }
  }
}
