const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  schedule: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String
  },
  bio: String,
  profileImage: String,
  experience: {
    type: Number,
    default: 0
  }
}, { versionKey: '__v' });

module.exports = mongoose.model('Doctor', doctorSchema);