const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    content: String,
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    } 
});

const comment = mongoose.model('comment', CommentsSchema);

module.exports = comment;