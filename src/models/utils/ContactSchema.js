const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  whatsapp: {
    type: String,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
})

module.exports = ContactSchema;
