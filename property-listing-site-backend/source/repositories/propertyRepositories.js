const Property = require('../schema/propertySchema');

const getAllProperties = () => Property.find();

const createProperty = (data) => Property.create(data);

module.exports = {
  getAllProperties,
  createProperty,
};
