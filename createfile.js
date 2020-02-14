var fs = require('fs');

fs.appendFile('mynewfile1.html', 'Hello world', function(err){
    if(err) throw err;
    console.log('saved!');
})