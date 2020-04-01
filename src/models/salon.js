const mongoose = require('mongoose');
const LocationSchema = require('./utils/LocationSchema');

const SalonSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  images: {
    type: [String],
    required: false,
  },
  location: {
    type: LocationSchema,
    index: '2dsphere',
  }
});

module.exports = mongoose.model('Salon', SalonSchema);
