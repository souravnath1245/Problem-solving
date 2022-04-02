// First Solution 

const ar=[1,2,2,5,5,5,5,3,3,4,3,5]

let max = 0;
let counter = 0;

// Step 2 (a)
ar.forEach(item => {
    // Step 3
    if (item > max) {
        // Step 4
        max = item;
        counter = 1;
        // Step 2 (b)
    } else if (item === max) {
        counter++;
    }
});

console.log(counter)


// second solution 

function birthdayCakeCandles(ar) {
    var maxHeight = Math.max(...ar);
    var maxHeightCount = 0;  
    for(var i = 0; i < ar.length; i++){
        if (ar[i] == maxHeight){
            maxHeightCount = maxHeightCount + 1;
        }
    }
    console.log(maxHeightCount);
}
birthdayCakeCandles(ar)

// Third Solution 

function duplicate(ar) {
    let count ={}
    for (let i = 0 ; i < ar.length; i++){
        if (count[ar[i]]){
            count[ar[i]]+= 1;
        }else{
            count[ar[i]]= 1;
        }
        
    }

   let num= Object.values(count).reduce((a, b) => count[a] > count[b] ? a : b);
    console.log(num)
}
duplicate(ar)