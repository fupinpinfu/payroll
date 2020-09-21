function foo(){
    return new Promise( (resolve, reject) => { // I want foo() to PROMISE me something
     setTimeout ( function(){ 
       // promise is RESOLVED , when execution reaches this line of code
        resolve('wohoo')// After 1 second, RESOLVE the promise with value 'wohoo'
     } )
   })
 }
 
 let bar ; 
 foo().then( res => {
  bar = res;
  console.log(bar) // will print 'wohoo'
 });
