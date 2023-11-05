import validator from "validator";
import bcrypt from 'bcrypt';

class User {
    #firstname;
    #lastname;
    #role;
    #email;
    #password
  
    constructor(firstname, lastname, role, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.role = role;
        this.email = email;
        this.password = password;
    }

    set firstname(value) {
        if (typeof value !== 'string' || validator.isEmpty(value, [{ ignore_whitespace: true }])) {
            throw new Error('Le prénom doit être une chaîne de caractère non vide');
        }
        return this.#firstname = value;
    }

    set lastname(value) {
        if (typeof value !== 'string' || validator.isEmpty(value, [{ ignore_whitespace: true }])) {
            throw new Error('Le nom doit être une chaîne de caractère non vide');
        }
        return this.#lastname = value;
    }

    set role(value) {
        return this.#role = value;
    }

    set email(value) {
        if(!validator.isEmail(value) || validator.isEmpty(value, [{ ignore_whitespace: true }])) {
            throw new Error('Ce n\'est pas un email valide');
        }
        return this.#email = value;
    }

    set password(value){
        const options = { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
        if (!validator.isStrongPassword(value, options)) {
            throw new Error('Le mot de passe doit comporter au moins 8 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
        }
        bcrypt.hash(value, 12, (error, hash) => {
            return this.#password = hash;
        });
    }

    get firstname () {
        return this.#firstname;
    }

    get lastname () {
        return this.#lastname;
    }

    get role () {
        return this.#role;
    }

    get email () {
        return this.#email;
    }

    get password () {
        return this.#password;
    }

    get fullname () {
        return `${this.#firstname} ${this.#lastname}`;
    }
}
  
  export default User;