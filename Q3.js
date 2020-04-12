// Q3. Implement a function strContains(char) that I can use on 
// any string and it returns true/false if the character “char” 
// is present on a string (optimize it as much as possible)

String.prototype.strContains=function(ch){
       
    //split method return array of length > 2 if it has the given char else 1
    var  arr=this.split(ch);
   //checking if len>1 then no char contain else contains
    if(arr.length>1)
      {
        return true;
        
      }else{
        return false;
        
      }

}