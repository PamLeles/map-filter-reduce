function filtraPares(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray= [1,23,37,55,69,40,10,2];

console.log(filtraPares(meuArray));

