'use strict';

let num = 20;// global variable

function showFirstMessage(text)
{console.log(text);  num = 10;  }//num = 10; local variable 




showFirstMessage("Hello world!");// takes argument from here and puts in line 3 instead text,after puts it in line 4 instead text
console.log(num);

// result---->  Hello world! 10












