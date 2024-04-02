// Function to delete an employee
const deleteEmployee = (Employee) => async (req, res) => {
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

module.exports = {deleteEmployee};