//Q10. Implement LinkedList class in JS.


class node{
   
  
    data=null;
    next=null;
    

}

class  Linkedlist{

     
     head=null;
    
     add=function(data)
    {
       var nextnode;
       if(this.head==null)
         {
            var n=new node();
           n.data=data;
           this.head=n;
           
           return;
         }else{
           
           var tnode=this.head;
           while(tnode.next!=null)
             {
               tnode=tnode.next;
             }
             
           nextnode=new node();
           nextnode.data=data;
           tnode.next=nextnode;
           
       }
  } 

  remove=function()
  {
     if(this.head==null)
       {
         return "empty";
         
       }else{
         
          this.head=this.head.next;
       }
  
}

 printLL=function()
{
// console.log(node);
var tempNode=this.head;
 while(tempNode!=null)
   {
       console.log(tempNode.data);
      tempNode=tempNode.next;
   }
}
}  





obj=new Linkedlist();
obj.add(22);
obj.add(45);
obj.remove();
obj.printLL();




