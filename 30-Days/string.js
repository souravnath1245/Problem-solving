// function processData(input) {
//     //Enter your code here
//     let odd =[]
//     let even =[]
//     for (let i= 0 ; i< input.length ; i++){
//         if(i %2 ===0 ){
//          odd.push( input[i])
//       }else if(i%2 !== 0){
//           even.push(input[i])
//       }
    
       
        
//     }
//     console.log(odd.join(''), even.join(''));
// } 

function processData(input) {
    let inputCopy = input.split('\n').slice(1);
    console.log(inputCopy)
    inputCopy.forEach((str) => {
      let evenStr = '';
      let oddStr = '';
        for(let i = 0; i < str.length; i++) {
            i % 2 ? oddStr += str[i] : evenStr += str[i];
        }
        console.log(`${evenStr} ${oddStr}`);
    });
}
processData("Hacker")




