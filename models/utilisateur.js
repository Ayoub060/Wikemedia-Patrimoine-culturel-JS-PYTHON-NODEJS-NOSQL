const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const utilisateurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    role: { type: String, enum: ['Utilisateur', 'Administrateur'], default: 'Utilisateur' }
});

// Hacher le mot de passe avant l'enregistrement
utilisateurSchema.pre('save', async function (next) {
    if (this.isModified('motDePasse')) {
        this.motDePasse = await bcrypt.hash(this.motDePasse, 10);
    }
    next();
});

// Vérifier le mot de passe
utilisateurSchema.methods.verifierMotDePasse = function (motDePasse) {
    return bcrypt.compare(motDePasse, this.motDePasse);
};

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
