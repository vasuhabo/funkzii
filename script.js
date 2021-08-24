'use strict';

let num = 20;// global variable

function showFirstMessage(text)
{console.log(text); console.log(num); }//num = 10; local variable 




showFirstMessage("Hello world!");// takes argument from here and puts in line 3 instead text,after puts it in line 4 instead text
console.log(num);

// result---->  Hello world! 20 20

function calc(a, b)

{return (a + b);}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));



function ret()

{ let num = 50; return num;}

const anotherNum = ret();

console.log(anotherNum);

// result---->  50

const logger = function ()

{console.log("Hello") ;};

logger();










