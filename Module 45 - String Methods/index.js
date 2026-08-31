// String Methods

// charAt() Method

let str = "Hello World";

// console.log(str.charAt(1));
console.log(str.charAt(str.length - 1));

// charCodeAt() Method

let str1 = "Javascript";

console.log(str1.charCodeAt(6));

// concat() Method

let newStr = str.concat(" ", str1);

console.log(newStr);

// includes() Method

let str2 = "Single Threaded";

// console.log(str2.includes("i", 1));
console.log(str2.includes("j"));

// indexOf() Method

let newStr1 = "Kesavan";

console.log(newStr1.indexOf("a", 4));

// lastIndexOf() Method

let newStr2 = "Kesavan";

console.log(newStr2.lastIndexOf("a", 4));

// repeat() Method

let newStr3 = "Javascript";

console.log(newStr3.repeat(3));

// replace() Method / replaceAll() Method

let str3 = "Js is a Script language - Js";

console.log(str3.replace("Js", "Javascript"));
console.log(str3.replaceAll("Js", "Javascript"));

// slice() Method

let newStr4 = "Single Thread";

console.log(newStr4.slice(3));
console.log(newStr4.slice(3, 8));
console.log(newStr4.slice(-3, -1));

// substring() Method / substr() Method

let newStr5 = "Single Thread";

console.log(newStr5.substring(3));
console.log(newStr5.substring(3, 8));
console.log(newStr5.substring(-3));
console.log(newStr5.substring(8, 0));

// split() Method

let words = "My Name is Iron-Man";

console.log(words.split(" "));
console.log(words.split(" ", 3));
console.log(words.split("-"));
console.log(words.split("-", 1));

// startsWith() Method

let words1 = "My Name is Iron-Man";

console.log(words1.startsWith("M"));
console.log(words1.startsWith("N", 3));
console.log(words1.startsWith("N", 4));
console.log(words1.startsWith("Name", 3));

// endsWith() Method

let words2 = "My Name is Iron-Man";

console.log(words2.endsWith("n"));
console.log(words2.endsWith("n", 5));
console.log(words2.endsWith("n", words2.length));
console.log(words2.endsWith("Iron", words2.length - 4));
console.log(words2.endsWith("Iron", words2.length - 4));

// toLowerCase() Method

let words3 = "My Name is Iron-Man";

console.log(words3.toLowerCase());

// toUpperCase() Method

let words4 = "My Name is Iron-Man";

console.log(words4.toUpperCase());

// trim() Method

let words5 = "   My Name is Iron-Man   ";

console.log(words5.trim());

// trimStart() Method / trimLeft() Method

let words6 = "   My Name is Iron-Man   ";

console.log(words6.trimStart());
console.log(words6.trimLeft());

// trimEnd() Method / trimRight() Method

let words7 = "   My Name is Iron-Man   ";

console.log(words7.trimEnd());
console.log(words7.trimRight());


