const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    profilePic:{
        type: String
    },
    autherName: {
        type: String
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    },
    body:{
        type: String
    } 
});

const CommentModel = mongoose.model('comments', commentSchema);

// findAll retrieves all comments
function findAll(callback) {
    CommentModel.find({}, callback);
}

// insertOne inserts a comment into the db
function insertOne(comment, callback) {
    CommentModel.create(comment, callback);
}


module.exports.CommentModel = CommentModel;
module.exports.findAll = findAll;
module.exports.insertOne = insertOne;
