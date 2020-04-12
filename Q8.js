// Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

//Ans-  We first had the concept of callback as javascript is async while requesting on network
//      so we were using callback as callback is nothing but the funciton which gets execute after the request/data is
//       recevied so the problem arrives when the nested functions are increasing so code would look very bad and difficult
//       to understand , so Asnc/Await is introduced it is very easy using asnc await for calling multiple
 //       server request without callback.
//       async functions make working with promises much easier.
//     It is important to note the async functions work on top of promises.
//     They are not a fundamentally different concept.
//    They can be thought of as an alternate way of writing promise-based code.
//     We can avoid chaining promise altogether using async/await.
 //    With function declaration
//     async function myFn() {
//     // await ...
//     }
//   // With arrow function
//      const myFn = async () => {
//     // await ...
//      }