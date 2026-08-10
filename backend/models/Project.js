const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['VIDEO', 'PHOTO', 'REELS', 'MOTION', 'COLOR', 'ALL']
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: [{
    type: String,
  }],
  video: {
    type: String,
  },
  client: {
    type: String,
  },
  year: {
    type: String,
  },
  tools: {
    type: String,
  },
  featuredStatus: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
