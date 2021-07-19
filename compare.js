"use strict"

let a = 20;
let b = 30;

// False
if ( a > b ) {
    console.log("a는 b보다 크다.");
}

// False
if ( a == b ) {
    console.log("a와 b는 같다.");
}

// True
if ( a < b ) {
    console.log("b는 a보다 크다.");
}

// ------------------------------------------------------------------

let x = 15;
let y = 22;

// False
if ( x >= y ) {
    console.log("x는 y보다 크거나 같다.");
}

// True
if ( ( x + 7 ) >= y ) {
    console.log("x + 7은 y보다 크거나 같다.");
}

// True
if ( x != y ) {
    console.log("x는 y와 같지 않다.");
}

// ------------------------------------------------------------------

let name1 = "양석준";
let name2 = "허연수";
let name3 = "양석준";

// False
if ( name1 == name2 ) {
    console.log ("name1과 name2는 같습니다.");
}

// True
if ( name1 == name3 ) {
    console.log ("name1과 name3는 같습니다.");
}

// ------------------------------------------------------------------

// True ( outo casting 때문에 True )
if ( 1 == "1" ) {
    console.log("위에 조건문은 True일까요? False일까요?");
}

// False ( === 는 형까지 비교하기 때문에 False )
if ( 1 === "1" ) {
    comsole.log(" 형까지 비교하는데 설마~~ ");
}