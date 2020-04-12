// Q4. Implement a function sum() in the
//  following way such that it gives the sum of two numbers

//first function is used 
//when sum is called function(y) is returned(in js fn cn b returned), after this call fucntion
function sum(x) {
    return function(y) {
        return x + y;
    };
}


//sum(2)(2)
// sum(2)will get funciton(y){
//     return x+y;
// }
//(2)will be passed in returned function