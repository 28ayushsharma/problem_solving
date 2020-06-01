function firstFunction() {
    secondFunction();
}

function secondFunction() {
    thirdFunction();
}

function thirdFunction() {
    console.log(new Error().stack);
}

firstFunction();

/*
What is call stack..??
A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.


#### Output ####
Error : 
    at thirdFunction (call_stack_explained.js:10:17)
    at secondFunction (call_stack_explained.js:6:5)
    at firstFunction (call_stack_explained.js:2:5)

*/