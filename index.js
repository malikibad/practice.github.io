// // Learning JAva-Script

// console.log("Hello");
// console.log("I like PIZZA !!!");

// // Learning Alert = A window Which acts Un expectedly
// // SIMPLE____

// //To create an Alert;

// window.alert("This is an alert!");
// window.alert("I Like Pizza!");


// // Getting the elements that I've created in html Document and Then changing their values--(To change the text content of a  page)


// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I Like Pizza!";


// variable  = A container that stores a value.
//             behaves as if it were the value it contains

//  1. declaration    let x;
//  2. assignment     x = 100;


// let x = 100;
//let y = 210;


//console.log(y);


// let age = 25;
// let price = 29.99;
// let GPA = 2.54;           //GPA = Grade Point Average


// console.log(GPA + " is Your GPA")
// console.log(price + " is the total Price")
// console.log(age + " is your age")
// // writing var and words in same line by this new method i discovered --The Method-- ( + "" ) -- -- 


// let fName = "Ibad";
// let mName = "-ur-";
// let lName = "Rehman";



// console.log(fName + mName + lName +" is your Full Name :)");     // A way to display your full name -- EAZYYY!!!



// //Another way to use variable and sentences together in console.log


// console.log(typeof age);
// console.log(`your GPA is: ${GPA} `);
// console.log(`You are ${age} years OLD!`);
// console.log(`the price for this product is currently at $${price} `);



// //practice...
// let FavouriteFood = "Pizza";
// let email = "Bro@gmail.com"

// console.log(`you like ${FavouriteFood}`)
// console.log(`your E-mail is ${email}`)




//booleans = True or False;

// let online = false;
// let ForSale = true;
// let isStudent  = true;

// console.log(typeof online)
// console.log(`Bro is online: ${online}`)
// console.log(`This Car is for sale: ${ForSale}`)
// console.log(`Students are enrolled: ${isStudent}`)



//practice - random

// let fullName = "Ibad-ur-Rehman"
// let age = 14;
// let student = true;

// document.getElementById("p1").textContent = `Your Full name is ${fullName}`;                          
// //Two methods to write the same thing. The Python + METHOD

// document.getElementById("p2").textContent = `Your age is ${age} years`;                          
// document.getElementById("p3").textContent = `You are a student in this school: ${student}`;                          



// The next method(pro-key) to write this is just that i mentioned right now;

//This a method that is used in python programming language and i just found-out that i can use it in JavaScript too!!!

//  Method =  "Your age is! " + age 
//  Method =  age + " is your age!" 





// We are currently done with variables :)
// AND we are also done with some quick basics:
// Heres what I've Learned ;


// 1. how to create an alert
// 2. how to call elements by --getele-- method
// 3. how to write variables and strings in one line ofcode
// 4. What variables are exactly!
// 5. Methods to write in one line of code: Two;
// 5.1 First is by using ${ } Method
// 5.2 Second method is the one that i have discovered right now because i didnt knew that we could do this in JavaAcript -- The method is actually from python because in python we use + (Write variable name) after "" so that it comes in one line of code and i applied this method on JS and it worked !! GReat !!

// 6. I've also learned Datatypes and also learned some functions i guess like Typeof etc-- So now after some break new topic would be starting soon -- 




// Arithematic operators = operands(values, variables, etc. )
//    operators(+ -* /)
// ex. 11 = x + 5;


let students = 30;

// students = students + 1
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extrastudents = students % 3;

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// students++;
// students--;



/*
        Operator Precedence
        1. parenthesis ()
        2. exponents 
        3. multiplication & division & module
        4. addition & subtraction

*/


// let result = 1 + 2 * 3 + 4 ** 2;

// console.log(result);





// How to accept user input 

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox


// Easy way:
// let username;

// username = window.prompt("What's your user_name? ")

// console.log(username);


// professional way:

// let user_name;

// document.getElementById("mySubmit").onclick = function () {
//     user_name = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `hello ${user_name}`
//     console.log(user_name)
// }




// let username;

// document.getElementById("MySubmit").onclick = function() {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Boom!, Hows this ${username}`
//     console.log(username)
// }



//-- Learned functions and more , achieving userinput and giving the response


let userName;

document.getElementById("mySub").onclick = function(){
        userName = document.getElementById("myName").value;
        if (userName === "") {
        document.getElementById("myHead").textContent = `Result: failed! `
        document.getElementById("confirmation-").textContent = `You were unSuccessful in inserting the user input, Try Again!` }

else if(userName) {
        document.getElementById("myHead").textContent =  `Result: ${userName}`
        document.getElementById("confirmation-").textContent = `You were successful in showing the user input! ${userName} `
        console.log(userName);
}
}















































