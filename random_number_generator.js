function generateRandom(min,max){
    return Math.ceil(Math.random()* (max-min)+min);

}

// self executing async arrow function 

(()=>{
    const num =generateRandom(1,10);
    console.log(num);
})();