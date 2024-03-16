// Importing mongoose's Schema class
const { Schema } = require('mongoose');

// Defining the schema for employees
const employeeSchema = new Schema({
    // Schema field for employee ID
    id: { type: Number, required: true },
    // Schema field for employee name
    name: { type: String, required: true },
    // Schema field for employee job title
    jobTitle: { type: String, required: true },
    // Schema field for employee salary
    salary: { type: Number, required: true },
});

// Exporting the employee schema
module.exports = employeeSchema;
