const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientRole: {
    type: String,
  },
  clientImage: {
    type: String, // Cloudinary URL
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5,
  },
  message: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', TestimonialSchema);
