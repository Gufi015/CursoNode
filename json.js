var http = require('http');

http.createServer(function () {
    http.get('http://nodejs.org/dist/index.json', (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;


        if(statusCode !== 200){
            error = new Error('request failed.\n' +
            `statusCode: ${statusCode}`);
        } else if(!/^aplication\/json/.test(contentType)){
            error = new Error('Invalid content-type.\n'+
            `Expected aplication/json but received ${contentType}`); 
        }

        if(error){
            console.error(error.message);
            res.resume();
            return;
        }

        res.setEncoding('utf-8');
        let dataRow = '';
        
        res.on('data', (chuck)=>{ dataRow += chuck;});
        res.on('end', ()=>{
            try {
                const parseData = JSON.parse(dataRow);
                console.log(parseData);
            }catch(e){
                console.error(e.message);
            }
        });
    }).on('error', (e)=>{
        console.error(`Got error ${e.message}`);
    })


}).listen(3000);

console.log('corriendo puerto 3000');