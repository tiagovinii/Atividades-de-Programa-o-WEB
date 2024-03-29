function inverterArray(array) {
    return array.reverse();
}

var array1 = [1, 2, 3, 4, 5];
console.log("Array original:", array1); 
console.log("Array invertido:", inverterArray(array1)); 

var array2 = ["a", "b", "c", "d", "e"];
console.log("Array original:", array2); 
console.log("Array invertido:", inverterArray(array2)); 

var array3 = [true, false, true, true, false];
console.log("Array original:", array3); 
console.log("Array invertido:", inverterArray(array3)); 