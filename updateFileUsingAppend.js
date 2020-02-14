var fs = require('fs');

fs.appendFile('mynewFile1.txt','This is my text.', function(err){
    if(err) throw err;
    console.log('updated!');
})