const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {type: mongoose.SchemaTypes.String, required: true},
    src: {type: mongoose.SchemaTypes.String, required: true},
    author: {type: mongoose.SchemaTypes.String, required: true},
    year: {type: mongoose.SchemaTypes.String, required: true}
});

module.exports = mongoose.model('Book', bookSchema);
