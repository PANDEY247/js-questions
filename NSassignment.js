const votingAge = 18;


function checkCanIvote(time,age){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age>=18){
                resolve('you can vote');
            }
            else{
                reject('you can not vote')

            }
        },time);
    });

}

console.log('first');
console.log('second');
console.log('third');

