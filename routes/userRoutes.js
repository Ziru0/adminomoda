const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); 
const requestController = require('../controllers/requestController');
const driverinfoController = require('../controllers/driverinfoController');


// User Routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Request Routes
router.get('/requestlist', requestController.getAllrequests);
router.get('/requestlist/:id', requestController.getUserById);

router.get('/driverinfo', driverinfoController.getAllDriverInfo);
router.get('/driverinfo/:id', driverinfoController.getDriverInfoById);

// ⚡️ Move this route ABOVE module.exports
// router.get('/request-list', (req, res) => {
//     console.log('Request List Route Hit');
//     res.render('request-list');
// });

// Export the router AFTER all routes are defined
module.exports = router;
