const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema and Model;
const VariationsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    colors: {
        type: String,
        default: "White"
    }
})
const StoreSchema = new Schema({
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    colors: {
        type: Array,
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    description: {
        type: String,
        default: "Elegancy is a style. do you have it? If not we got you coverd with our new range of Nike sneakers and a plater of other awesome selections."
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    variations: VariationsSchema
})

const Sneaker =  mongoose.model("sneaker", StoreSchema)

module.exports = Sneaker;