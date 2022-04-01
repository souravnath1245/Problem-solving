const array =[1,8,7,4,5]


let max_value = 0;
let min_value = 0;
let length = array.length;
array.sort(function(a,b){return a-b;});
for( let i = 0, j = length-1 ; i< length-1 ; i++, j--){
    
    min_value += array[i]
    max_value += array[j]
    
    
}
console.log(max_value+ " " + min_value)


// Hacker Rank Code 

// function miniMaxSum(arr) {
//     // Write your code here
    
//     let max_value = 0;
//     let min_value = 0;
//     let length = arr.length;
    
//     arr.sort(function (a,b) {return a-b;})
//     for(let i = 0, j= length-1 ; i < length-1; i++, j--){
//         max_value+= arr[j]
//         min_value+= arr[i]
//     }
//     console.log(min_value+ " "+ max_value)

// }

