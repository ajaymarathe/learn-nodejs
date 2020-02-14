// create empty new file using fs.open() function 

var fs = require('fs');

fs.open('open.html','w', function(err, file){
    if(err) throw err;
    console.log('saved!');
});