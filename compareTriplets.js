function compareTriplets(a,b){

    // First solution 


    let array = []
    let array2 = []
    for(let i = 0, j= 0; i <a.length , j < a.length; i++, j++){
        

        let souravPoints = 0;
        let priyasPoints = 0; 
        if(a[i] === b[j]){
          
        }else if(a[i] > b[j]){
            souravPoints += 1
        }else{
            priyasPoints++
        }
        array.push(souravPoints)
        array2.push(priyasPoints)
    }
    
    let sum=array.reduce((a,b) => a+b)
    let sum2=array2.reduce((a,b) => a+b)
    console.log([sum,sum2]);


// solution 2

    let score = [0,0]
    for(let i= 0 ; i < a.length; i++){
        if(a[i]> b[i]){
            score[0]++
        }
        else if(a[i]< b[i]){
            score[1]++
        }
        
    }
    console.log(score) ;

    // Clean Code :

    let score2 = [0,0]

    for (let i = 0; i < a.length; i++)
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score2
    
}
compareTriplets([5,7,7] , [3,6,10])

// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the 'compareTriplets' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY a
//  *  2. INTEGER_ARRAY b
//  */

// function compareTriplets(a, b) {
//     // Write your code here
//     let su
//     let array = []
//     let array2 =[]
    
//     for(let i=0, j=0; i <a.length, j< b.length;i++, j++){
//     let alicePoints = 0;
//     let bobPoints = 0;
//     if(a[i] === b[j]){
        
//     }else if(a[i]> b[j]){
//         alicePoints += 1
//     }else{
//         bobPoints+= 1
//     }
//     array.push(alicePoints)
//     array2.push(bobPoints)
    
//     }
//     let sum=array.reduce((a,b) => a+b)
//     let sum2=array2.reduce((a,b) => a+b)
    
//     console.log(sum, sum2)

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

//     const result = compareTriplets(a, b);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }
 
