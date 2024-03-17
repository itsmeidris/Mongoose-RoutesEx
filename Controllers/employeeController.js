const mongoose = require('mongoose');
const employeeSchema = require('../Models/employeeModel');
const Employee = mongoose.model('employees' ,employeeSchema);

// Function to retrieve all employees
const getAllEmployees = async (req, res) => {
    try {
        // Retrieve all employees from the database
        const employees = await Employee.find();
        // Send a success response with the retrieved employees
        res.status(200).json(employees);
    } catch (e) {
        // Send an error response if unable to retrieve data
        res.status(500).json(`Cannot get data.`);
    }
}

// Function to retrieve an employee by ID
const getEmployeeById = async (req, res) => {
    try {
        // Extract employee ID from request parameters
        const empId = parseInt(req.params.id);
        // Find the employee by ID in the database
        const employee = await Employee.findOne({ id: empId });

        if (employee) {
            // Send a success response with the retrieved employee
            res.status(200).json(employee);
        } else {
            // Send a 404 error response if employee not found
            res.status(404).json(`Employee not found.`);
        }
    } catch (e) {
        // Send an error response if unable to retrieve data
        res.status(500).json(`Cannot get data.`);
    }
}

// Function to create a new employee
const createEmployee = async (req, res) => {
    try {
        // Extract employee data from request body
        const { id, name, jobTitle, salary } = req.body;
        // Create a new employee instance
        const newEmployee = new Employee({ 
            id, 
            name, 
            jobTitle, 
            salary 
        });

        if (newEmployee) {
            // Save the new employee to the database
            await newEmployee.save();
            // Send a success response with the newly created employee
            res.status(201).json(newEmployee);
        } else {
            // Send a 500 error response if unable to add new data
            res.status(500).json(`Cannot add new data.`);
        }
    } catch (e) {
        // Log and send an error response if an error occurs
        console.log(`Error : ${e.message}`);
    }
}

// Function to update an employee
const updateEmployee = async (req, res) => {
    try {
        // Extract employee ID from request parameters
        const empId = parseInt(req.params.id);
        // Extract updated employee data from request body
        const { id, name, jobTitle, salary } = req.body;

        // Find and update the employee in the database
        const updatedEmployee = await Employee.findOneAndUpdate(
            { id: empId },
            { $set: { id, name, jobTitle, salary } },
            { new: true }
        );

        if (updatedEmployee) {
            // Send a success response with the updated employee
            res.status(201).json(updatedEmployee);
        } else {
            // Send a 500 error response if unable to update data
            res.status(500).json(`Cannot update data.`);
        }
    } catch (e) {
        // Log and send an error response if an error occurs
        console.log(`Error : ${e.message}`);
    }
}

// Function to delete an employee
const deleteEmployee = async (req, res) => {
    try {
        // Extract employee ID from request parameters
        const empId = req.params.id;
        // Find and delete the employee from the database
        const deletedEmployee = await Employee.deleteOne({ id: empId });

        if (deletedEmployee) {
            // Send a success response with the deleted employee
            res.status(201).json(deletedEmployee);
        } else {
            // Send a 500 error response if unable to delete data
            res.status(500).json(`Cannot delete data.`);
        }
    } catch (e) {
        // Log and send an error response if an error occurs
        console.log(`Error : ${e.message}`);
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}