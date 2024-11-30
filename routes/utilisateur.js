const express = require('express');
const Utilisateur = require('../models/utilisateur');
const jwt = require('jsonwebtoken');

const router = express.Router();
const SECRET_KEY = 'votreCleSecrete';

// Créer un compte
router.post('/inscription', async (req, res) => {
    try {
        const utilisateur = new Utilisateur(req.body);
        await utilisateur.save();
        res.status(201).send('Utilisateur créé avec succès');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Se connecter
router.post('/connexion', async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({ email: req.body.email });
        if (!utilisateur || !(await utilisateur.verifierMotDePasse(req.body.motDePasse))) {
            return res.status(401).send('Email ou mot de passe incorrect');
        }
        const token = jwt.sign({ id: utilisateur._id, role: utilisateur.role }, SECRET_KEY);
        res.send({ token });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
