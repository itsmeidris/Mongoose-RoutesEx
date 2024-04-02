// Function to retrieve all employees
const getAllEmployees = (Employee) => async (req, res) => {
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

module.exports = {getAllEmployees}