const propertyRepo = require('../repositories/propertyRepositories');

const getProperties = async () => {
  
  return await propertyRepo.getAllProperties();
};

const addProperty = async (propertyData, imageDetails) => {

  const property = await propertyRepo.createProperty({
    title: propertyData.title,
    location: propertyData.location,
    price: propertyData.price,
    image: imageDetails.url || imageDetails,
    description: propertyData.description,
    type: propertyData.type,
    bedrooms: propertyData.bedrooms,
    bathrooms: propertyData.bathrooms,
    area: propertyData.area,
    contact: propertyData.contact,
  })

  if(!property){
        throw {message: "Something went wrong while registering new property", statuscode: 500}
    }

    return property;
};

module.exports = {
  getProperties,
  addProperty,
};
