const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Portrait', 'Wedding', 'Fashion', 'Product', 'Creative', 'Retouching'],
  },
  image: {
    type: String, // Cloudinary URL
    required: true,
  },
  beforeImage: {
    type: String, // Optional for Before/After comparison
  },
  afterImage: {
    type: String, // Same as image if Before/After is used, or a separate modified version
  },
  description: {
    type: String,
  },
  featured: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', GallerySchema);
