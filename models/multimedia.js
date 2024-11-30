const mongoose = require('mongoose');

const multimediaSchema = new mongoose.Schema({
    cheminFichier: { type: String, required: true },
    type: { type: String, enum: ['Photo', 'Vidéo','audio'], required: true },
    souvenir: { type: mongoose.Schema.Types.ObjectId, ref: 'Souvenir', required: true }
});

module.exports = mongoose.model('Multimedia', multimediaSchema);
