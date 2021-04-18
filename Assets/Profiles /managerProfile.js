const EmployeeProfile = require('./EmployeeProfile')

class managerProfile extends EmployeeProfile {
    constructor(manager){
        super(manager);
        this.officeNumber = manager.officeNumber;
        this.setProfile();
    }
}
module.exports = managerProfile