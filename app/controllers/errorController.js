const errorController = {
    notFound: (req, res) => {
        res.status(404).render('error', {message: 'Erreur 404: page non trouvée', user: req.session, basket: 0});
    },

    forbidden: (req, res) => {
        res.status(403).render('error', {message: 'Erreur 403: Vous n\'avez pas les autorisations', user: req.session, basket: 0});
    },

};

export default errorController;