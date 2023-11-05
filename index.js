import express from 'express';
import dotenv from 'dotenv';
import router from './app/routers/router.js';
import errorController from './app/controllers/errorController.js';
import session from 'express-session';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: false }));

app.use(session({
  resave: true, 
  secret: process.env.SECRET, 
  saveUninitialized: true, 
}));

app.use(express.static('./public'));
app.use(router);

app.use(errorController.forbidden);
app.use(errorController.notFound);

app.listen(port, () => {
  console.log(`Serveur sur http://localhost:${port}/`);
});