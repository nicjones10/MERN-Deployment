const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    app.post('/api/pirate/', PirateController.createPirate);
    app.get('/api/pirates/', PirateController.getAllPirates);
    app.get('/api/pirate/:id', PirateController.getOnePirate);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate);
}