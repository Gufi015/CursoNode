var promis = new Promise(function (resolve, reject) {
    function sayHello() {
        resolve('Hello');
    }


    reject('Something went wrong')
    setTimeout(sayHello,1000);
})

promis 
.then(function(message){
    console.log(message);
}).catch(function(err){
    console.log('ERROR: '+ err)
})
//console.log(promis);