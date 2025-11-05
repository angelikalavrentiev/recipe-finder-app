// controllers/authController.js

// inscription
exports.signup = async (req, res) => {

    res.status(200).json({ message: "Inscription réussie" });
}

// connexion
exports.login = async (req, res) => {

    res.status(200).json({ message: "Connexion réussie" });
}

// déconnexion
exports.logout = async (req, res) => {
    res.status(200).json({ message: "Déconnexion réussie" });
}