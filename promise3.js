var promise = new Promise(function(resolve ,reject){
    const x = "hello ";
    const y = "hi";
    if(x===y){
        resolve();
    } else{
        reject();
    }
});

// consumed my promise - by registering functions using .then and ,catch methods 
promise
.then(function(){
    console.log('sucess,you are geek')

}).catch(function(){
    console.log('some error is occured');

})