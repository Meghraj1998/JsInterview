//Q11. Implement Stack class in JS.

class stack{
  
    arr=[];
    top=-1;

     push=function(data){
     
       if(this.top<0)
         {
           this.top++;
           this.arr[this.top]=data;
           
         }else{
           this.top++;
           this.arr[this.top]=data;
           
         }
       return data;
   }


    pop=function()
    {
      if(this.top<0)
        {
          return "empty"
        }else{
          
          this.top--;
          
        }
    }
 print=function(){
   
   //console.log(this);
     for(let i=this.top;i>=0;i--) {
       console.log(this.arr[i]);
     }
 }

}

obj=new stack();
obj.push(22);
obj.push(33);

obj.print();

