const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/HUBX', {useNewUrlParser: true, useUnifiedTopology: true} ,(err) => {
    if (!err) {
        console.log('MONGODB CONNECTION ESTABLISHED...');
    }
    else {
        console.log('MONGODB CONNECTION FAILED : ', + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;