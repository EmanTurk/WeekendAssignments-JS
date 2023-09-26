//Exercise 1.1\\

function boolToWord(bool) {
    return bool ? "Yes" : "No";
}
//////Test///////
console.log(boolToWord(true)); 
console.log(boolToWord(false)); 
/////////////////////////////////////////////////////////

//Exercise 2.1\\
function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

//////Test///////
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));  
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); 
/////////////////////////////////////////////////////////

//Exercise 2.3\\

function findNextSquare(sq) {
    let number = Math.sqrt(sq);
    if (Number.isInteger(number)) {
        return Math.pow(number + 1, 2);
    } else {
        return -1;
    }
}

//////Test///////
console.log(findNextSquare(121));  // Outputs: 144//
console.log(findNextSquare(625));  // Outputs: 676//
console.log(findNextSquare(114));  // Outputs: -1//

/////////////////////////////////////////////////////////

//Exercise 2.4\\

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1];
}

//////Test///////
console.log(findUniq([1, 1, 1, 2, 1, 1]));  // Outputs: 2//
console.log(findUniq([0, 0, 0.55, 0, 0]));  // Outputs: 0.55//

/////////////////////////////////////////////////////////

//Exercise 2.5\\

function summation(num) {
    return (num * (num + 1)) / 2;
}

// Test examples:
console.log(summation(2));  // Outputs: 3//
console.log(summation(8));  // Outputs: 36//
/////////////////////////////////////////////////////////

//Exercise 2.6\\

function centuryFromYear(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        return Math.floor(year / 100) + 1;
    }
}

// Test examples:
console.log(centuryFromYear(1705));  // Outputs: 18//


//Exercise 2.7\\

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
    
            if (value2 !== 0) {
                return value1 / value2;
            } else {
                console.error('Division by zero error');
                return undefined; 
            }
        default:
            console.error('Invalid operation');
            return undefined; 
    }
}

// Test examples://
console.log(basicOp('+', 4, 7));     // Outputs: 11
console.log(basicOp('-', 15, 18));   // Outputs: -3

/////////////////////////////////////////////////////////

//Exercise 4.1\\

function fibonacciIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
/////////////////////////////////////////////////////////

//Exercise 5.1\\

function removeFirstAndLast(str) {
    return str.slice(1, -1);
}

//////Test///////
const result = removeFirstAndLast("apple");
console.log(result);  

/////////////////////////////////////////////////////////

//Exercise 5.2\\

function repeatStr(count, src) {
    return src.repeat(count);
}

//////Test///////
console.log(repeatStr(5, "Hello"));  
//"HelloHelloHelloHelloHello"

/////////////////////////////////////////////////////////

//Exercise 5.3\\

function toCamelCase(str) {
    return str.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase());
}

//////Test///////
console.log(toCamelCase("the-stealth-warrior"));  ///"theStealthWarrior"

/////////////////////////////////////////////////////////

//Exercise 5.5\\

function nameToInitials(name) {
    const [firstName, lastName] = name.split(' ');
    return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
}

// Example usage:
console.log(nameToInitials("Ian Summerholder"));      //"I.S"

/////////////////////////////////////////////////////////

//Exercise 5.6\\

function maskify(str) {
    if (str.length <= 4) {
        return str;
    }
    const lastFour = str.slice(-4);
    const maskedPart = '#'.repeat(str.length - 4);
    return maskedPart + lastFour;
}

//////Test///////
console.log(maskify("4556364607935616"));  
    
console.log(maskify("Nananananananananananananananana Batman!"));  // Test: "####################################man!"

/////////////////////////////////////////////////////////

//Exercise 5.7\\

function findShortestWordLength(s) {
    return Math.min(...s.split(' ').map(word => word.length));
}

//////Test///////
console.log(findShortestWordLength("This is a test string"));     // Outputs: 1 (for "a")

/////////////////////////////////////////////////////////

//Exercise 6.1\\

function accum(s) {
    return s.split('').map((char, index) => {
        return char.toUpperCase() + char.toLowerCase().repeat(index);
    }).join('-');
}

//////Test///////
console.log(accum("abcd"));       // Outputs: "A-Bb-Ccc-Dddd"

/////////////////////////////////////////////////////////

//Exercise 6.2\\

function countDuplicates(s) {
    s = s.toLowerCase();

    let charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let duplicateCount = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicateCount++;
        }
    }

    return duplicateCount;
}

//////Test///////
console.log(countDuplicates("abcde"));           // Outputs: 0
console.log(countDuplicates("aabbcde"));         // Outputs: 2

/////////////////////////////////////////////////////////

//Exercise 6.4\\

function isIsogram(str) {

    str = str.toLowerCase();


    let charCount = {};

 
    for (let char of str) {
        if (charCount[char]) {
            
            return false;
        } else {
            charCount[char] = true;
        }
    }

    return true;
}

//////Test///////
console.log(isIsogram("Dermatoglyphics"));  // Outputs: true//
console.log(isIsogram("boBa"));              // Outputs: false//
