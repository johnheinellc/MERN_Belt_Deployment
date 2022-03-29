const mongoose = require('mongoose');
 
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "The Pet's name is required"],
        minlength: [3, "Must contain 3 letter..."],
    },
    type: {
        type: String,
        required:[true, "The Pet's type is required"],
        minlength: [3, "Must contain 3 letter..."],
    },
    description: {
        type: String,
        required:[true, "The Pet's description is required"],
        minlength: [3, "Must contain 3 letter..."],
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
},
    {timestamps: true}
);
 
const Pet = mongoose.model('Pet', PetSchema);
 
module.exports = Pet;
