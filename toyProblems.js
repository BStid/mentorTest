//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  // reverseIt:

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  reverseIt: str => {
    let reversed = str
      .split("")
      .reverse()
      .join("");
    return reversed;
  },
  // removeDups:

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates
  removeDups: arr => {
    let notDups = arr.filter((value, index, array) => {
      return array.indexOf(value) === index;
    });
    return notDups;
  },

  // titleIt:

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  titleIt: str => {
    let titledWords = str
      .split(" ")
      .map((value, index) => {
        let upperCaseWord = value.charAt(0).toUpperCase();
        let restOfWord = value.slice(1);
        let fullWord = upperCaseWord + restOfWord;
        return fullWord;
      })
      .join(" ");
    return titledWords;
  },
  // vowelCounter:

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  vowelCounter: str => {
    let counter = 0;
    str.split("").map((value, index) => {
      value === "a" ||
      value === "e" ||
      value === "i" ||
      value === "o" ||
      value === "u"
        ? counter++
        : null;
    });
    return counter;
  },

  // isPrime:

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  isPrime: num => {
    if (num <= 0) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  },

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
};
