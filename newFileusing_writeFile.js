// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist,
//  a new file, containing the specified content, will be created:

var fs = require('fs');

fs.writeFile('newfile3.html', 'hello content', function(err){
    if(err) throw err;
    console.log('saved!');
})