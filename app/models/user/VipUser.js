import User from "../User.js";

class VipUser extends User {

  constructor(firstname, lastname, email, password) {
    super(firstname, lastname, 'vip', email, password);
  }
}

export default VipUser;
