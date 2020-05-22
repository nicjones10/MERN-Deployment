const Pirate = require('../models/pirate.model');

module.exports.createPirate = (req,res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllPirates = (req,res) => {
    Pirate.find().sort({name: 1})
        .then(pirates => res.json(pirates))
        .catch(err => res.json(err))
}

module.exports.getOnePirate = (req,res) => {
    Pirate.findById(req.params.id)
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err))
}

module.exports.updatePirate = (req,res) => {
    const {name, image, chests, phrase, position, pegLeg, eyePatch, hookHand} = req.body;
    Pirate.findByIdAndUpdate(
        req.params.id,
        {
            name,
            image,
            chests,
            phrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        },
        {
            new:true,
            runValidators: true
        })
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.deletePirate = (req,res) => {
    Pirate.findOneAndDelete(req.params.id)
        .then(() => res.json({status: 'success'}))
        .catch(err => res.json(err))
}