const arr = [ -4 , 3 , -9, 0 ,4, 1]

let PlusMinus = (arr)=>{
    const plus = [];
    const minus = [];
    const zero = [] ;
    let positive, negative, zeros ;
     for (let num in arr){
        if( arr[num ] > 0){
           plus.push(arr[num])
        }else if(arr[num]<0){
            minus.push(arr[num])
        }else if(arr[num] == 0){
            zero.push(arr[num])
        }
    }
 
    
    positive= (plus.length / arr.length).toFixed(6);
    negative= (minus.length / arr.length).toFixed(6);
    zeros= (zero.length / arr.length).toFixed(6)    ;
    console.log(positive, negative, zeros)

    
}

PlusMinus(arr)

