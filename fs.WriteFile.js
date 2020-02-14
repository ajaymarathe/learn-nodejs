// The fs.writeFile() method replaces the specified file and content.

var fs = require('fs');

fs.writeFile('mynewfile1.txt', 'replace this content', function(err){
    if(err) throw err;
    console.log('replaced');
})