const {Router} = require("express");
const { signup, login, logout, profile } = require("../controllers/authController");
const router = Router();

// créer compte
router.post("/signup", signup);
router.post("/signup", signupForm);

// connexion
router.post("/login", login);
router.post("/login", loginForm);

// déconnexion
router.post("/logout", logout);

// affiche compte
router.get("/profile", profile);

module.exports = router;