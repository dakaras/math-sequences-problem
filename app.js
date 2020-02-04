//Arithmetic, Geometric, or -1(no pattern)
//no negative numbers

function mathSequences(arr){
    let arith = []
    let geo = []

    for(i=1; i < arr.length; i++){
        let num = arr[i] - arr[i-1]
        arith.push(num)
        let num2 = arr[i] / arr[i-1]
        geo.push(num2)
    }
    console.log(`A: ${arith}`);
    console.log(`A: ${geo}`);
    
    return arr
}

console.log(mathSequences([2,4,6,8])) //"Arithmetic"
console.log(mathSequences([3,9,27])); //"Geometric"
console.log(mathSequences([2,5,14,89])); // -1

