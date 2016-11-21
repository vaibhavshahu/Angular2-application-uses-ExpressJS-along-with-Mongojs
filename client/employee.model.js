var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
    empId : String,
    name: String,
    phone: String,
    email: String,
    marital_status : String,
    state : String,
    city : String
});

var employee = mongoose.model('employees', employeeSchema);

module.exports = employee;