// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

 //Prototypes in javascript are the object created after every object, that is prototype is created for 
 // every  class we create in js. So why we need prototype , as in js when we create object  and then instance of it using
 //  function so for every object we get all the properties of that class
 //         ex -
       /*     function std()
         { 
             var add=function()
             {
                 console.log("add function");
             }

        }
        var obj1=new std();
        var obj2=new std();
        so now obj1 has the function add() and obj2 too has add() function
        so if wee create 100 obj then add() will be create 100 times as this is not the need, because
          add() do the same job , so now protype comes in play as when we declare std() two object are created
          1- std()
          2-prototype ,all the method of std will have the access to this prototype so 
          now if we create 
          std.prototype.add=function(){};
           this will create one function and can be accessed from n object created from std.
     
           Prototype is also important for inheriting  function from parent class, no class in js like cpp,java
           all the implementation is  of class is using prototype concept only.



        */