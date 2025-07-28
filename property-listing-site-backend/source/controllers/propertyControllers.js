const propertyService = require('../services/propertyService');

const cloudinary = require('../config/cloudinaryConfig');
const fs = require('fs/promises');

const getAllProperties = async (req, res) => {
  try {
    const properties = await propertyService.getProperties();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addNewProperty = async (req, res) => {

  console.log("Request body:", req.body);
  try {

     if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log("Result from cloudinary", result)
            await fs.unlink(req.file.path);

            response = await propertyService.addProperty(req.body, result);
        } else {

            response = await propertyService.addProperty(req.body, "Image not attached");
        }

        return res.status(201).json({
            message: "Property added successfully",
            success: true,
            data: response,
            error: {}

        })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProperties,
  addNewProperty,
};
