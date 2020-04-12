// Q7. Give a relevant example of Promises

var promise = new Promise(function(resolve, reject) { 
    var x=9; 
    if(x>10)
     {
         resolve();
     }
     else{
         reject();
     }
  }); 
    
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occured'); 
      });

//Second example
  
   function p(){
       new Promise(function(resolve,reject){
        
        setTimeout(function(){
             resolve();
         }, 200);
   })
}

  p().then(function(){
      console.log("times end");
  });