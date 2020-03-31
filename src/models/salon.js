const mongoose = require('mongoose');
const LocationSchema = require('./utils/LocationSchema');
const ContactSchema = require('./utils/ContactSchema');

const SalonSchema = new mongoose.Schema({
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
    type: ContactSchema,
    required: false,
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
