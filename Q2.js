
// Q2. Implement a function propertyExists(obj, path) 
// that takes in an object and a path (string) as arguments and returns 
// ‘False’ if the property doesn’t exist on that object or is null, else 
// returns the value of the property


function propertyExists(obj, path){
   
    //all the char in string is returned by split fn  in array
    var arr=path.split(".");
 
    //checking the obj on each arr[i] and if found replacing it with t1, after this return obj
    for(let i=0;i<arr.length;i++)
      {
        
         var t=obj[arr[i]]
         //t obj into obj
         obj=t;
      }
        if(obj==null)
        {
            return false;
        }
        return obj;
    
    
  };

  