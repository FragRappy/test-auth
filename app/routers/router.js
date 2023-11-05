import express from "express";
import getController from "../controllers/getController.js";
import authController from "../controllers/authController.js";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get('/', getController.home);

router.get('/auth', getController.auth);

router.get('/reg', getController.reg);
router.post('/reg/:slug', postController.reg)

router.post('/profil', authController.login);
router.get('/profil', authController.login);

export default router;