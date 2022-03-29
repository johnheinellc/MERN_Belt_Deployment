const PetController = require('../controller/pet.controller');
console.log("routes file dconnected")
module.exports = (app) => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:_id', PetController.findOneSinglePet);
    app.post('/api/pets/new', PetController.createNewPet);
    app.put('/api/pets/update/:_id', PetController.updateExistingPet);
    app.delete('/api/pets/delete/:_id', PetController.deleteAnExistingPet);
}