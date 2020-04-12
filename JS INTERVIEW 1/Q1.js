 
//Q1. Implement customMap() function for JS arrays. 
//     The functionality should be exactly the same as
//      that of JS native .map() function. Function customMap() should return 
//     a new array and not change the array on which we are mapping

//customMap Function
Array.prototype.customMap=function (callback){
var arr=[];
//return function for arr.length times 
for(let i=0;i<this.length;i++)
    {
    let returnData=callback(this[i],i, this);
      arr[i]=returnData;
    }
    //return the new array created
  return arr;
  
}

    

