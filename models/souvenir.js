const mongoose = require('mongoose');

const souvenirSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    typeObjet: { type: String, enum: ['Document', 'Photo', 'Art'], required: true },
    époque: { type: String, required: true },
    origine: { type: String, required: true },
    dateAjout: { type: Date, default: Date.now },
    contributeur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur', required: true }
});

module.exports = mongoose.model('Souvenir', souvenirSchema);
