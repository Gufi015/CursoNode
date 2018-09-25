const fs = require('fs');


fs.appendFile('data.txt','', (err)=> {
    if(err){
        throw err;
    }
    console.log('file created successful')
});

/*
fs.unlink('data.txt', (err) => {
    if(err){
        throw err;
    }

    console.log('file delete successful..');
}); */