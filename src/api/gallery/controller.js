const Gallery = require('./model');

exports.read = async () => {
  return Gallery.find();
};

exports.create = async ({ data = {} } = {}) => {
  return Gallery.create(data);
};

exports.readOne = async (id) => {
  return Gallery.findById(id);
};
