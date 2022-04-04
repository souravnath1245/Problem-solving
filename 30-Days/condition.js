const N = prompt(parseInt())
   if((( N%2===0 ) && (  N >= 2 && N <= 5)) || ( N%2==0 && N > 20)){
        console.log("Not weird")
    }else if((N%2 ===0 ) && (N >=6 && N<=20)){
        console.log("weird")
    }else if(N % 2 !== 0)  {
        console.log('weird')
    }

