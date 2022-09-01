let main = document.getElementById("main");
console.log(main);
let nav = document.getElementById("nav");
console.log(nav);


// to show data in nav as String
// console.log(nav.innerHTML);

//to change data in nave
// nav.innerHTML="document";
// console.log(nav.innerHTML);

let containers=document.getElementsByClassName("container");
console.log(containers);

let sel=document.querySelector(".container");
console.log('selector return ' , sel);


// let id=document.querySelector("#main>ul>li");
// console.log('selector return ' , id );

let id=document.querySelectorAll("#main>ul>li");
console.log('selector return ' , id );

