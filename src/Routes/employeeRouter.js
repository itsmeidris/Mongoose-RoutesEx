// Importing Express
const express = require('express');
const Employee = require("../Models/employeeModel");
const { getAllEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../Controllers/employee');



// Creating a new router instance
const employeeRouter = express.Router();

// Defining routes for employee operations
employeeRouter.get('/', getAllEmployees(Employee));
employeeRouter.get('/:id', getEmployeeById(Employee));
employeeRouter.post('/', createEmployee(Employee));
employeeRouter.put('/:id', updateEmployee(Employee));
employeeRouter.delete('/:id', deleteEmployee(Employee));

// Exporting the employeeRouter for use in the application
module.exports = employeeRouter;
