console.log("======================1.a) DATA TYPE===============================")

console.log("hello shahrukh")

//> Variables

// Var was used long back, it have issue that it can redeclared but Let not and also constant
//var is a function scope
var score = 34;
var score = 35; // Redeclaring
console.log(score)

// in let reassignment happens(means it take new value)
// let is a block scope
let point= 23;
let points= 24;
console.log(points)

// reassignment and redeclaring not happens
const value = 10;
console.log(value)



//> Data Types
// 1. Numbers" 1,2,3,4, 2.50
// 2. String " ", ' '
// 3. Boolean: true and false
// 4. Null

//5. Undefined variable declared but not initialized

//6. Object complex data strucutre

//7. Symbol looks like objects
//=====================================================================================================
console.log("======================1.b) STRING============================")

let firstName = "Shahrukh";
let lastName = "Syed";
console.log(firstName, lastName)
//method 1: String concatination is also possible by using + operation

//method 2: Using Template literals
let fullN = `I want to become ${firstName} ${lastName}`
console.log(fullN)

//Getting String Character
 console.log(firstName[4])

 //String methods
 console.log(firstName.toUpperCase())
 console.log(lastName.indexOf("y"))



 //=====================================================================================================
 console.log("===================1.c) COMMON STRINGS METHODS==================")
 //String Methods

 let hobbies ='  coding reading running    ';
    
    // trim method
    let result = hobbies.trim()  //trim will remove the extra space or data from the string
    console.log(hobbies)
    console.log(result)

    //from below two we can find the difference between the index of same string before triming and after trim
console.log(hobbies.indexOf("coding"))
console.log(result.indexOf("coding"))

console.log(result.lastIndexOf("running"))  //case sensitive

//includes methods
console.log(result.includes("reading")) // this will gives in booleans, to see @ in email and its case sensitive

let fullName = "SyedShahrukh"
console.log(fullName.slice(0,4)) // excluding the last one\

//about split
let favoriteColors = "Brown,Blue,Black,Gray";
let favoriteColor2 = "Green Orange Red White";

let array1 = favoriteColors.split(","); //it will remove the ',' from string and make it array  
let array2 = favoriteColor2.split(" "); //it will remove the spaces ' ' and make it array 


//String are immutables. 
console.log(array1);
console.log(array2);





//=====================================================================================================
console.log("===================1.D) NUMBERS=====================")
//Numbers

let num = 20;
console.log(num, typeof num)// it will tell the type of value

//Mathematic Operators * / % ** + -

let mathOpQuot = num / 2; // this one give Quotient which is 10
console.log(mathOpQuot)

let mathOpRemai = num % 2; // this will give you remainder
console.log(mathOpRemai);

//Mathematical expression 
let mathOp = num * 2 + (4*3) - 8/2 % 4;  // here we have to know the periority.
//(4*3) =12, num *2 = 40, 8/2 = 4, 4%4 = 0 .. this will make: 40+12-0 = 52
// 1. () Bracketes
// 2. ** Power Operator
// 3. * / % (from left to right)
// 4. + - (from left to right)

console.log(mathOp)



//=====================================================================================================
console.log("===================1.e) Equality=====================")
//Loose Equality (==) Vs Strict Equality Operator(===)
// loose equalty only check the number but not datatype.

let age = 22; // Number type value is in int but below we are checking in string
console.log(age == "22")//loose equality focus on number

console.log(age === "22") //Focus on both value and type

//for not equality 
console.log(age !="22")

//not equaltiy should be strict then we have to use.
console.log(age !=="22")



//=====================================================================================================
console.log("===================1.f) Type Conversion=====================")
//Type Conversion

let stringType = "12";
console.log(stringType, typeof stringType);

// Number Method
let numberType = Number(stringType);// changing the string-Type in number-Type
console.log(numberType, typeof numberType)
//And also

let NumType = 54;
console.log(typeof NumType);
//String Method
let strType = String(NumType);
console.log(strType, typeof strType)

let age1 = 32;
let booleanValueOfAge = Boolean(age1);
console.log(booleanValueOfAge);// except 0 int if console have some thing it will true only and for blank string it will b false



//=====================================================================================================
console.log("===================1.g) ARRAY=====================")
//Array
//Note: in JS we wont get error but we can get undefined at console

let menu = ['Biryani','Taco','Shawarma'];
console.log(menu[1]);

//Modify the Array
menu[1] = 'Bowl';
// it will replace the Taco with Bowl
console.log(menu);

//Array Methods
//1. Join method 
        // ' ' what ever we pass in it we call it seprator
console.log(menu.join(' '))

//2. indexof
console.log("indexof Biryani: "+menu.indexOf("Biryani"))

//3. concat method
let newMenu = ["sweet-dish", "Drinks"];
console.log("concat method: "+ menu.concat(newMenu)); // concat array comes later.

//4. Length method
console.log("Length method: "+newMenu.length)

//5. push method : it will change the array. tell the length of new element
console.log(newMenu.push("Ice-cream"))// retrun the new length of an array

//6. pop()

console.log(newMenu.pop())// it will remove the element from last



//=====================================================================================================
console.log("=========1.g) Boolean Values And Comparison Operators============")

//type of boolean

let booleanType = true;
let stringTypeB = "true";

console.log(typeof booleanType, typeof stringTypeB)


//Mehods Return Boolean Values

let email = "syed.shahrukh@gmail.com";
let booleanValue= email.includes("h");
console.log("does email include h? "+booleanValue);

//Comparison Operator always return Boolean value
// ==, ===, !==, !=
// > , >=
// < , <=


//=====================================================================================================
console.log("=========2.a) For Loop============")
//For loop

for(let i =1; i<=10; i++){   //initialization, condition and increment/decrement
    console.log("For loop", i);
}
console.log("==");
console.log("below gives menu items:")
//uscase of loop for menu its at line 170
for(let i = 0; i<menu.length;i++){
    console.log(menu[i])
}


//=====================================================================================================
console.log("=========2.b) While Loop============")
//While loop
// In while we just mention condition inside the while and if I talk about initialization
// then we have to mention before starting the while loop
// and increment/decrement is done inside the body or scope


let j = 1  // this is initilization
while(j<10){  // Condition
    console.log("while loop", j)
    j++; // increment/dec and if we remove j++ then we will get infinite loop 

}

//Note: all loops have same steps: Initilization, then condition and increment
// always carefull with loops, increment and decrement if not assigned then
// it will give infiniti and browser gets hang/stuck
//> while loop less prefered and for loop more prefered

//=====================================================================================================
console.log("=========2.c) Do While Loop============")
//Do While loop

let k = 1;  //initilization
do{
    console.log("do while"); // it will run atleast one time before condition 
    k++//increment
}while(k<=1) // Condition


//=====================================================================================================
console.log("=========2.d) if, else, else-if============")
//if, else, else-if

let menu2 = menu.concat(newMenu)
console.log(menu2)

if(menu2.includes("Biryani-temp-out")){ // if want to see remove -temp-out
    console.log("I will eat biryani");

}else if(menu2.includes("Shawarma-temp-out")){// if want to see remove -temp-out
    console.log("I will eat Shawarma");
}else{
    console.log("I can eat any thing, except "+ menu2.pop());
}

//nested-if statement.. this one is not good practise but if situation demands
// and its necessary then we can use it.

//num is already 20
if(num > 19){
    console.log("Run if 1st condition true");
    if(num > 25){
            console.log("Run if Both condition true");
            if (num > 18){
                console.log("run if all condition true")
            }
    }
}

//=====================================================================================================
console.log("=========2.e) Break and continue Statement============")
//Continue statement also called Jump statement
//Continue it will skip some step or value in loop

for(let i = 1; i<=5; i++){
    if(i == 2){
        continue; //move towards the next iteration  and it will skip 2
    }console.log("value of i ",i)
}

//Break: it will terminate the loop and end the scope and come outside.

for(let i= 1; i<=10; i++){
    if(i ==5){
        console.log("Our desired value is: ",i);
        break;
    }
    console.log("now remaining numbers are ",i)
}
console.log("Now I am out side the loop")


//=====================================================================================================
console.log("=========2.f) Logical Operator============")
//And: &&, Or: ||, Not !
// example use in password

let password = "QWERTY#"
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
console.log(specialChar.includes("@"||"#"))
if(password.length > 5 && password.includes("@") || password.includes("#")){
    console.log("password strength is Strong")

}else[
    console.log("change your password")
]

// Not Operator ! : says true to false and false to true
// example
let status = false; // here status is given false
if(!status){ // here status is false but we used not then inside if its TRUE and it will go inside the for-loop
    console.log(" your status is  ", status);
}

// Priorities
// not !
// And  &&, Or || it will go from left to rightd

let resultPri = true && true || false && !false // it will fix ! then && from left to right
console.log(resultPri);


//=====================================================================================================
console.log("=========2.g) Variable and Block Scope ============")
//Variable and Block scope

score = 90; // this is global scope
score1 = 100
if(true){
    score = 50 // score is override and if we let then it wont over ride and it wont refer out-side variable
    console.log(score)// its considering nearest value

    let score1 = 200; // now it will consider Block score when used let and var dont create scope
    console.log(score1); // and const also create block scope because it wont reassign
}

//=====================================================================================================
console.log("=========2.h) ternary Operator (? :) ============")
//Ternary Operator: its like if else. me define if else in one line

let ageAdu = 21;
let weight = 60;
if(age > 18){
    console.log("in If-else Qualified");
}else{
    console.log("in If-else failed");
}

// Single line solution
// if we are defining 2 condition then " if first condition is false then it will print last and if second 
// condition is false then it will print second condition. if both condition are true then it will print first condition 
           // condition ? true : false; 
let resultAge = age >18 ? weight > 50 ? "line-Qualified" : "weightIssue": "ageIssue";
console.log(resultAge);

//=====================================================================================================
console.log("=========2.I) Switch ============")
//Variable and Block scope

let currentdate = new Date(); // date method
console.log(currentdate)

let weekDay = currentdate.getFullYear();
console.log(weekDay);

//switch is just like if but it have case
//switch automatically drops it dont have any thing to stop so for that we use break
// use it when many IF condition are there are its matches
let ageSwitch = 17;
switch(ageSwitch){
    case 15:
    case 16:
    case 17:
        result = " he is 17 year old"
        break;
    default:
        result = "Not ALlowed"
}
console.log(result)
