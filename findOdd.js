//Find Odd
//Write a function that takes an array a as parameter. The array contains
//non-negative numbers. Every number in the array appears an even number
//of times, except for one number that appears an odd number of times. The
//function should return  the number that appears an odd number of times.

var input = [2,2,3,3,3,4,4,4,4,6,6];

console.log("input: ", input);

function findOdd(arr){
    var dict = {};
    for(var i = 0; i < arr.length; i++){
        if(!dict[arr[i]]){
            dict[arr[i]] = 1;
        }else{
            dict[arr[i]] ++;
        }
    }
    for(key in dict){
        if(dict[key] % 2 != 0){
            console.log("odd: ", key);
            return key;
        }
    }
}

findOdd(input)
