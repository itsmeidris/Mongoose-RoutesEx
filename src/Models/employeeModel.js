// Importing mongoose's Schema class
const mongoose = require('mongoose');

// Defining the schema for employees
const employeeSchema = new mongoose.Schema({
    // Schema field for employee ID
    id: { type: Number, required: true },
    // Schema field for employee name
    name: { type: String, required: true },
    // Schema field for employee job title
    jobTitle: { type: String, required: true },
    // Schema field for employee salary
    salary: { type: Number, required: true },
});

const Employee =  mongoose.model('Employee' ,employeeSchema);


// Exporting the employee schema
module.exports = Employee;
