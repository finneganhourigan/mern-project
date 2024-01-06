//this should be a mongoose model/schema? that depicts a disc object containing:
//  speed, glide, turn, fade, manufacturer, disc type, description

const mongoose = require('mongoose');
const discSchema = new mongoose.Schema({
    manufacturer: {type: String, required: true},
    name: {type: String, required: true},
    speed: {type: Number, required: true},
    glide: {type: Number, required: true}, 
    turn: {type: Number, required: true},
    fade: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});

module.exports = mongoose.model('Disc', discSchema);
