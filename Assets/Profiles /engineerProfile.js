const EmployeeProfile = require('./EmployeeProfile')

class engineerProfile extends EmployeeProfile {

    constructor(engineer) {
        super(engineer);
        this.github = engineer.github
        this.setProfile();
    }

}
module.exports = engineerProfile