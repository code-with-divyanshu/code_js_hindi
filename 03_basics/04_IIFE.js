// Immediately Invoked Function Expressions (IIFE)

// * use to remove global scope polution

(function code() {
  // named IIFE
  console.log("DB CONNECTED");
})(); // for end iife code use semicole ;

// (function Defination)(excution call)

// unnamed IIFE
((name) => {
  console.log(`DB CONNECTED Two ${name}`);
})("Divyanshu");
