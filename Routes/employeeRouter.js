// Importing Express
const express = require('express');
// Importing employeeController for handling employee-related requests
const employeeController = require('../Controllers/employeeController');

// Creating a new router instance
const employeeRouter = express.Router();

// Defining routes for employee operations
employeeRouter.get('/', employeeController.getAllEmployees);
employeeRouter.get('/:id', employeeController.getEmployeeById);
employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.put('/:id', employeeController.updateEmployee);
employeeRouter.delete('/:id', employeeController.deleteEmployee);

// Exporting the employeeRouter for use in the application
module.exports = employeeRouter;
