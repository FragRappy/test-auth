import User from "../User.js";

class MemberUser extends User {

  constructor(firstname, lastname, email, password) {
    super(firstname, lastname, 'membre', email, password);
  }
}

export default MemberUser;
