var fs = require('fs');

fs.rename('newfile3.html','home.html', function(err){
    if(err) throw err;
    console.log('file has been renamed!');
});