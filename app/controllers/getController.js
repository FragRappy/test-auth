const getController = {
    home: (req, res) => {
      res.render('home', {user: req.session, basket: 0});
    },

    auth: (req, res) => {
      res.render('authentication', {user: req.session, basket: 0});
    },

    reg: (req, res) => {
      res.render('registration', {user: req.session, basket: 0});
    },
};
  
export default getController;
  