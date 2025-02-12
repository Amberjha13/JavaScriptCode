// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function deepFlat(arr){
    return arr.reduce((flat, item)=> Array.isArray(item)?flat.concat(deepFlat(item)):flat.concat(item), [])
}



function strReverse(str){
    return [...str].reduce((accu, item)=> item+accu,"")
}

console.log(strReverse("hello"))

console.log(deepFlat([1, [2, [3, 4], 5], [6, [7, [8, 9]]]]));

function fact(n){
    if(n===0 || n ===1){
        return 1;
    }else {
        return n*fact(n-1)
    }
}

console.log(fact(5))
