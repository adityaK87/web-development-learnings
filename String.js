//  Javascript string function

//  This tutorial is aboout JavaScript String function

var str = "This is String ";
console.log(str);
//First occurence of a substring
var position = str.indexOf("is");
console.log(position);

//Last occurence of a substring
var position = str.lastIndexOf("is");
console.log(position);

// Substring from a string
// var substr =str.slice(1,6);
var substr = str.substring(1, 6);
var substr1 = str.substr(1, 6);
console.log(substr1);

// var replaced=str.replace( 'String','Aditya' );
// console.log(str)
// console.log(replaced)

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// var newstr=str.concat('hii this is me')
// console.log(newstr);
var strWhithWhiteSpaces = (" hii this is me Aditya ");
console.log(strWhithWhiteSpaces);

// WhiteSpaces.trim();

// var char2=str.charAt(2);
var char2 = str.charCodeAt(2);
console.log(char2);



