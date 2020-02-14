var fs = require('fs');

fs.unlink('mynewFile1.txt',function(err){
    if(err) throw err;
    console.log('file has been deleted successfully!');
});