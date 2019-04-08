const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const GallerySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;