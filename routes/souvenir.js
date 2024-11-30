const express = require('express');
const Souvenir = require('../models/souvenir');
const Multimedia = require('../models/multimedia');

const router = express.Router();

// Ajouter un souvenir
router.post('/ajouter', async (req, res) => {
    try {
        const souvenir = new Souvenir(req.body);
        await souvenir.save();
        res.status(201).send('Souvenir ajouté avec succès');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Modifier un souvenir
router.put('/:id', async (req, res) => {
    try {
        await Souvenir.findByIdAndUpdate(req.params.id, req.body);
        res.send('Souvenir modifié avec succès');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Supprimer un souvenir
router.delete('/:id', async (req, res) => {
    try {
        await Souvenir.findByIdAndDelete(req.params.id);
        res.send('Souvenir supprimé avec succès');
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Afficher les détails d'un souvenir
router.get('/:id', async (req, res) => {
    try {
        const souvenir = await Souvenir.findById(req.params.id).populate('contributeur');
        res.send(souvenir);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
