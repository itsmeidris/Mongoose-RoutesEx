// Function to create a new employee
const createEmployee = (Employee) => async (req, res) => {
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

module.exports = {createEmployee};