// Function to retrieve an employee by ID
const getEmployeeById = (Employee) => async (req, res) => {
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

module.exports = {getEmployeeById};