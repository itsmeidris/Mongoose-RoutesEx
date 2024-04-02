const { getAllEmployees } = require('./getAll');
const { getEmployeeById } = require('./getById');
const { createEmployee } = require('./post');
const { updateEmployee } = require('./put');
const { deleteEmployee } = require('./delete');

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}