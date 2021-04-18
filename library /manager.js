const Emloyee = require('./Employee');

class Manager extends Emloyee {
    constructor (name, id, email, officeNumber){
        super(name,id,email);
        this.title = 'Manager';
        this.officeNumber;
    }
getRole(){
    return this.title;
}
getOfficeNumber(){
    return this.officeNumber;
}



}
module.exports = Manager;