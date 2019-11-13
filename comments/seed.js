// const data = require('./dummyData.js');
// const mongoose = require('mongoose');
// const commentModel = require('./database/db.js');

// const URI = require('./config/keys.js');
// mongoose.connect(URI.mongoURI, {useNewUrlParser: true});

// var seedDb = function (data) {
//   for(var i = 0; i < data.length; i++){
//     var profilePic = data[i].profilePic;
//     var autherName = data[i].autherName;
//     var createdAt = data[i].createdAt;
//     var body = data[i].body;

//     var newComment = {
//       profilePic : profilePic,
//       autherName : autherName,
//       createdAt : createdAt,
//       body : body
//     };

//     commentModel.insertOne(newComment, function(err, result){
//       if(err) {
//         throw err;
//       }
//       console.log('data inserted in the db:' + result);
// 		});
		
//   }
    
// };

// seedDb(data);