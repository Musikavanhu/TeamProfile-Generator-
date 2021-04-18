const EmployeeProfile = require('./EmployeeProfile');

class internProfile extends EmployeeProfile {
    constructor(intern) {
        super(intern);
        this.school = intern.school;
        this.setProfile();
    }
}
module.exports = internProfile