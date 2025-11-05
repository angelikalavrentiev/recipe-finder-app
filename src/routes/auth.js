const {Router} = require("express");
const { signup, login, logout } = require("../controllers/authController");

const router = Router();

// créer compte
router.post("/signup", signup);

// connexion
router.post("/login", login);

// déconnexion
router.post("/logout", logout);

module.exports = router;