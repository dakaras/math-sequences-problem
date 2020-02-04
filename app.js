//Arithmetic, Geometric, or -1(no pattern)
//no negative numbers

function mathSequences(arr){
    let arith = new Set()
    let geo = new Set()

    for(i=1; i < arr.length; i++){
        let num = arr[i] - arr[i-1]
        arith.add(num)
        let num2 = arr[i] / arr[i-1]
        geo.add(num2)
    }
    if (arith.size === 1){
        return "Arithmetic"
    }
    else if (geo.size === 1){
        return 'Geometric'
    } else {
        return -1
    }
}

console.log(mathSequences([2,4,6,8])) //"Arithmetic"
console.log(mathSequences([3,9,27])); //"Geometric"
console.log(mathSequences([2,5,14,89])); // -1

