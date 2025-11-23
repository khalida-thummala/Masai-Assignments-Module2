
// Q8. Inbuilt HOFs – map, filter, reduce, sort

let nums = [10, 3, 7, 20, 13, 2];
// 1. Using map, create a new array with the square of each element.
let squares = nums.map(num => num * num);
console.log("Q8 Squares:", squares);

// 2. Using filter, keep only prime numbers.
let isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let primes = nums.filter(isPrime);
console.log("Q8 Primes:", primes);

// 3. Using reduce, find the sum of all elements.
let totalSum = nums.reduce((a, b) => a + b, 0);
console.log("Q8 Sum:", totalSum);

// 4. Using sort, arrange elements in descending order.
let descending = [...nums].sort((a, b) => b - a);
console.log("Q8 Descending:", descending);


// Q9. Callback Function Question


// simple functions
function displayCar() {
  console.log("This is a Car");
}

function displayTruck() {
  console.log("This is a Truck");
}

function displayBike() {
  console.log("This is a Bike");
}

// Higher Order Function
function vehicleInfo(vehicleCategory, callbackFn) {
  console.log("Vehicle Category:", vehicleCategory);
  callbackFn(); // execute the callback
}

// Calling HOF with different callbacks
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);
