//Q1.Spread Operator(Array
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combinedArr = [...arr1, ...arr2];
console.log('Q1.Combined Array:', combinedArr); 

//Q2.Spread Operator(Object)
let person = { name:"Venu", age:25 };
let extra = { city:"Bangalore" };
let combinedObj = { ...person, ...extra };
console.log('Q2.Combined Object:', combinedObj);

//Q3.Rest Operator(Function Parameters)
function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log('Q3.Sum of All:', sumAll(1, 2, 3, 4 ));

//Q4:Rest Operator(Array Destructuring)
let numbers= [100, 200, 300, 400, 500];
let [a,...remaining]= numbers;
console.log("Q4.a:", a);
console.log("Q4.Remaining:", remaining);

//Q5:Nested Object Destructuring
let user= {
    name:"Alice",
    address:{
        city:"Bangalore",
        pin:560001,
        geo:{
            lat:11.22,
            lng:77.33
        }
    }
};
let { 
    address: { 
        city,
        geo: { lat, lng } 
    } 
    } = user;
console.log("Q5.City:", city);
console.log("Q5.Latitude:", lat);
console.log("Q5.Longitude:", lng);

//Q6:Arrow Functions
const multiply = (a, b) => a * b;
console.log("Q6.Multiply:", multiply(5, 4));

//q7:Optional Chaining
let emp ={
    name:"Prakash",
    details:{
        department:"IT",
        profile:{role:"Developer"}
    }
};
let role = emp.details?.profile?.role;
console.log("Q7.Role:", role);
