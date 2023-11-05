import User from "../User.js";

class AdminUser extends User {

  constructor(firstname, lastname, email, password) {
    super(firstname, lastname, 'admin', email, password);
  }
}

export default AdminUser;
