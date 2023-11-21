console.log("Hello World outside IIFE");

(function () {
  console.log("Hello World inside IIFE. An IIFE is an anonymous function with its own scope and execution context");
})();
