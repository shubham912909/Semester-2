console.log("Hello, World!");
function showAlert(){
    alert("Hello CSE-22");
}
let person = {
    name: "John Doe",
    age: 30,
};
console.log(person.name); // Output: John Doe
console.log(person.age);  // Output: 30
let numbers=[1,2,3,4,5,6];
console.log(numbers[0]);
console.log(numbers[4]);

let mixedarray = [1,"hello",true,{name:"uttam"},[1,2,3]];
console.log(mixedarray[0]);
console.log(mixedarray[3]);
console.log(mixedarray[3].name);
console.log(mixedarray[4][1]);

//Normal function with no parameters
function greet(){
    console.log("Hello, welcome to CSE-22!");
}
greet(); // Output: Hello, welcome to CSE-22!

//Function with parameters
function add(a, b){
    return a + b;
}
console.log(add(5, 3)); // Output: 8
 function multiply(a,b){
    return a*b;
 }
 console.log(multiply(4,5));   //Output:20

 //Function Expression
 let newadd= function(a,b){
 return a+b;
 }  
 console.log(newadd(3,5)); // Output : 8

var newgreet = function(){
    console.log("Hello,CSE-22!")
 }
 console.log(newgreet());

 //Arrow function with no parameters
 let sayhi = () => console.log("hi!");
 sayhi();

 //Arrow function with single parameters
let square = x => x*x;
console.log(square(4));
 //Arrow function with one parameters
 const greatuser =name =>{
    console.log(`hello, ${name}!`);
 }
greatuser("uttam");   //hello, uttam!

//Map on array 
// .map() is an array method
// It loops through each element & applies a function to each elements and then return new array
//Map creates a new array by applying a function to each element of the original way 
let newarray=[1,2,3,4,5];
let squaredarray= newarray.map((num) => num*num);  
console.log(squaredarray);    //[ 1, 4, 9, 16, 25 ]
const sum_1 =(a,b)=>(a+b);
console.log(sum_1(4,5));    //9

//Filter on array
//Filter creates a new array with all elements that pass the test implemented by provided function

let evenNumbers =[1,2,3,4,5,6,7,8,9];
let filteredEvenNumbers = evenNumbers.filter(num => num % 2 == 0);
console.log(filteredEvenNumbers);   //[ 2, 4, 6, 8 ]

//Reduce on the function

let sum_2=[1,2,3,4,5];
let total = sum_2.reduce((previous,current) => previous+current,0);
console.log(total);  //15

let students=[{name:"Uttam",marks:99},{name:"Raj",marks:89},{name:"rahul",marks:98}];
  //map to get marks of all students 
  let marks =students.map(obtain =>obtain.marks);
  console.log(marks);   //[ 99, 89, 98 ]

  let names = students.map(name=> name.name);
  console.log(names);

  let totalmarks=students.reduce((acc,students)=> acc +students.marks,0);
  
  console.log(totalmarks);   //286