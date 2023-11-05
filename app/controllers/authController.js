import users from "../datas/users.js";
import bcrypt from 'bcrypt';

const authController = {
  
    login: (req, res) => {
        try {
            const user = users.find(user => user.email === req.body.email);
            const session = users.find(user => user.email === req.session.email && user.password === req.session.password);
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    req.session.fullname = user.fullname;
                    req.session.firstname = user.firstname;
                    req.session.lastname = user.lastname;
                    req.session.email = user.email;
                    req.session.role = user.role;
                    req.session.password = user.password;
                    if (req.session.role === 'admin'){
                        res.render('adminPanel', { user : req.session, users});
                    }
                    if (req.session.role === 'membre' || req.session.role === 'vip'){
                        res.render('userPanel', { user : req.session, basket: 0 });
                    }
                    
                } else {
                    res.render('error', { message: 'Mauvais identifiant ou mot de passe', user: req.session, basket: 0 });
                }
                });
            } else if (session) {
                if (req.session.role === 'admin'){
                    res.render('adminPanel', { user : req.session, users});
                }
                if (req.session.role === 'membre' || req.session.role === 'vip'){
                    res.render('userPanel', { user : req.session, basket: 0 });
                }
            } else {
                throw new Error('Mauvais couple identifiant/mot de passe');
            }
        } catch (error) {
            res.render('error', { message: error.message, user: req.session, basket: 0  });
        }
    },
};

export default authController;