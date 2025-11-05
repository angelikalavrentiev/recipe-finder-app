// controllers/authController.js
const bcrypt = require('bcrypt');
const { generateToken, verifyJwtToken } = require("../utils/jwt");
const { loadUsers, saveUsers } = require('../utils/userStorage');
const usersService = require('../services/usersService');

// inscription
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "Champs manquants" });
        }

        const userExists = users.find(u => u.email === email);
        if (userExists) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        users.push(newUser);
        saveUsers(users);

        res.status(201).json({ message: "Inscription réussie", user: { id: newUser.id, username, email } });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
}

exports.signupForm= (req, res) => {
    res.render('signup');
}

// connexion
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Champs manquants" });
        }

        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ message: "Utilisateur non trouvé" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = generateToken({ normalizedUsername, role }, "1h");
        
            res.cookie("access_token", token, {
                httpOnly: true,
                sameSite: "lax",
                maxAge:60 * 60 * 1000, 
                path: "/"
            })
        
            res.status(200).json({ message: "Vous êtes bien authentifié", token, normalizedUsername, role })
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
}

exports.loginForm = (req, res) => {
    res.render('login');
}

exports.verifyToken = async (req, res) => {
    const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token manquant" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Format du header invalide" });
  }

  const decoded = verifyJwtToken(token);

  if (!decoded) {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }

  res.status(200).json({ valid: true, user: decoded });

}

// déconnexion
exports.logout = async (req, res) => {
    res.clearCookie("access_token");
    res.status(200).json({ message: "Déconnexion réussie" });
}

// afficher profile user
exports.profile = async (req, res) => {
    const user = usersService.getUserById(parseInt(req.params.id));
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
        res.render('profile');
}