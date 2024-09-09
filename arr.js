// Q1

let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];

let sortedNumbers = numbers.slice().sort((a, b) => a - b);
console.log("\n Sorted matrix:", sortedNumbers);

let squaredNumbers = numbers.map(num => num ** 2);
console.log("\n Number squares:", squaredNumbers);

let numbers2 = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10,26];

let firstAbove25 = numbers2.find(num => num > 25);
console.log("\n First element greater than 25:", firstAbove25);

let allAbove5 = numbers.every(num => num > 5);
console.log("\n Are all numbers greater than 5:", allAbove5);

let contains3 = numbers.includes(3);
console.log("\n Does the array contain the number 3:", contains3);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("\n Even numbers:", evenNumbers);

let middleIndex = Math.floor(numbers.length / 2) - 1;
let removedMiddle = numbers.slice();
removedMiddle.splice(middleIndex, 2);
console.log("\n The matrix after removing the middle two elements:", removedMiddle);

let productOfNumbers = numbers.reduce((acc, num) => acc * num, 1);
console.log("\n Product of numbers:", productOfNumbers);

let indexAbove5 = numbers.findIndex(num => num > 5);
console.log("\n Placement of first element greater than 5:", indexAbove5);

let lastElement = numbers.pop();
console.log("\n Last item:", lastElement);
console.log("\n Array after removing the last element:", numbers);

numbers.push(100);
console.log("\n The matrix after adding 100:", numbers);

// Q2

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

let namesWithA = names.filter(name => name.toLowerCase().includes('a'));
console.log("\n Names that contain 'a':", namesWithA);

let namesString = names.join('-');
console.log("\n Array as string:", namesString);

// Q3

let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];

let startsWithB = fruits.some(fruit => fruit.startsWith('b'));
console.log("\n Is there an element that starts with 'b':", startsWithB);

let subFruits = fruits.slice(1, 4);
console.log("\n Elements 2 to 4:", subFruits);

fruits.unshift('yellow');
console.log("\n The array after adding 'yellow' at the beginning:", fruits);

// Q4

let words = ['hello', 'world', 'javascript', 'array', 'function'];

let wordsLength = words.map(word => word.length);
console.log("\n Length of each word:", wordsLength);

let foundWord = words.find(word => word === 'javascript');
if (foundWord) {
  console.log("\n Item exists:", foundWord);
} else {
  console.log("\n Item not found");
}
