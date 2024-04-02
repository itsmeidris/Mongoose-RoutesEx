// Function to update an employee
const updateEmployee = (Employee) => async (req, res) => {
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

module.exports = {updateEmployee};