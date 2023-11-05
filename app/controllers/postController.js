import users from "../datas/users.js";
import MemberUser from "../models/user/MemberUser.js";
import fs from 'fs'

fs.access("./datas/users.js", fs.constants.F_OK, (err) => {
    if (!err) {
      console.log('pas bon')
    }
  });

const postController = {
    reg: (req, res) => {
        try {
            const checkUser = users.find(user => user.fullname === `${req.body.firstname} ${req.body.lastname}`);
            const checkMail = users.find(user => user.email === req.body.email);
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            if (checkUser && checkMail){
                throw new Error('Le nom et prénom ont déjà été associé à cet email');
            } 
            if (password !== confirmPassword) {
                throw new Error('Le mot de passe est différent de celui de confirmation');
            } 
            const newUser = `new MemberUser (${(req.body.firstname).toString()}, ${(req.body.lastname).toString()}, ${(req.body.email).toString()}, ${(req.body.password).toString()}),`;
            console.log(newUser)
            users.push(newUser);
            fs.writeFileSync('./app/datas/users.js', users);
            res.render('succesNewUser', {user: req.session, basket: 0})
        } catch (error) {
            res.render('error', {user: req.session, basket:0, message: error.message });
        }
    }
};



export default postController;