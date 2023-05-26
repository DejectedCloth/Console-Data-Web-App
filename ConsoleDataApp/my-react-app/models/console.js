const mongoose = require('mongoose');

const consoleSchema = new mongoose({
    console: {type: String, required: true},
    year: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required:true},
    information: {type:String, required:true}
});

module.exports = mongoose.model('Console', consoleSchema);