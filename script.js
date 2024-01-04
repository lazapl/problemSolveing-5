/* Create a function that returns true if an asterisk * is inside a box. 

function inBox(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes("*")){
            return true
        }
    }
    return false
}


console.log(inBox([
    "###",
    "#*#",
    "###"
  ])) // true
  
  console.log(inBox([
    "####",
    "#* #",
    "#  #",
    "####"
  ])) // true
  
  console.log(inBox([
    "*####",
    "# #",
    "#  #*",
    "####"
  ])) // true
  
  console.log(inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
  ])) // false

  --------------------------------------------------------------------------------------------*/

/*Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
function makeTitle(str){
    return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(makeTitle("This is a title"))       // This Is A Title
console.log(makeTitle("capitalize every word")) // Capitalize Every Word
console.log(makeTitle("I Like Pizza"))          // I Like Pizza
console.log(makeTitle("PIZZA PIZZA PIZZA"))     // PIZZA PIZZA PIZZA

--------------------------------------------------------------------------------------------*/



/*Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.


function hackerSpeak(str){
    return str.replace(/a/g, "4")
              .replace(/e/g, "3")
              .replace(/i/g, "1")
              .replace(/o/g, "0")
              .replace(/s/g, "5")
}

console.log(hackerSpeak("javascript is cool")) // j4v45cr1pt 15 c00l
console.log(hackerSpeak("programming is fun")) // pr0gr4mm1ng 15 fun
console.log(hackerSpeak("become a coder"))     // b3c0m3 4 c0d3r

--------------------------------------------------------------------------------------------*/

/*Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
    let sorting = arr.sort((a, b) => a - b)
    let twolowest = sorting[0] + sorting[1]
    return twolowest
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])) //7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])) // 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])) // 1
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])) // -1570
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])) // -2860

--------------------------------------------------------------------------------------------*/


/*Given a two digit number, return true if that number contains one even and one odd digit.


function oneOddOneEven(num){
    let number = num.toString()


    let arr1 = number.split("")

    return parseInt(arr1[0]) !== parseInt(arr1[1]) ? true : false
}




console.log(oneOddOneEven(12)) // true
console.log(oneOddOneEven(55)) // false
console.log(oneOddOneEven(22)) // false

--------------------------------------------------------------------------------------------*/