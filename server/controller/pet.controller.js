const Pet = require('../model/pet.model');
 
module.exports.findAllPets = (req, res) => {
    Pet.find().sort("type").exec()
        .then(allDaPets => {
            res.json({ pets: allDaPets })
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params._id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewPet = (req, res) => {
    // console.log(req.body)
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingPet = (req, res) => {
    // console.log(req.body)
    Pet.findOneAndUpdate(
        { _id: req.params._id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params._id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
