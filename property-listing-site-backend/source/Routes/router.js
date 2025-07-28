const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyControllers');
const { uploader } = require('../Middleware/multerMiddleware');

router.get('/', propertyController.getAllProperties);
router.post('/', uploader.single('image'), propertyController.addNewProperty);

module.exports = router;
