//how to write to page
//document.write("hello")

//how to write to page
//console.log("hello")

//----------
//Declearing a var
//var is used in the older version and it has limeted scope
//var variable= 0;

//let is new from ES6 it is commun practice to use let
//let  variable1=0;

//const is used to say this var can't be assigned
//another value so it's (fixed)
//const variable2=0;
//----------
/*variables have many types:
passing by value : 
string/
intger/
double/
float/
boolean/ 
and null meaning nothing  it is usaualy the 
programer who put this value/
undefined and it means it has 
undefined value but the memory space
is reserved usually it indicates some type of error.

passing by erference :
objects
arrays
----------------

math operasion 
add+
subtract-
multiply*
divide/
remainder%
-----------
assignment
== same shape
===same shape and datatype
<=
>=
<
>
!=
------------
condictions

*/
//let i = 0;
//if(i==0){console.log("hi");}

/*if(i!=0){
    console.log("nothing");


}
else{console.log(4); }*/

/*if(i>1){console.log("hello");}
else if(i==0){console.log("what");}
else{console.log("hi again")}*/
//--------
/*let i=0;
switch(i){
    case 0:
        console.log("hefllo");
        break;


    case 1:
    console.log("it is a miracel");
    break;
    
    default:
        console.log("really!");
}
*/

/*----------------------------------
// loops */
//let i =-5;
/*for(i;i<1;i++ )
{
console.log("hell");

}*/

// for inside for
//let g=5

/*for(i=0;i<g;)
{
    for(;g!=0;g--){console.log("g is Nooso " +g);}
  
};
*/

//for with if break
/*
for (i=0;i<10;i++){

    if(i==5){
        break;
    }
    console.log(i);
}
*/

//for with if continue
/*
for (i=0;i<10;i++){

    if(i==5){
        continue;
    }
    console.log(i);
}*/

//Wile loop

/*let i=-1;

while(i!=-2)
{
    console.log(i+1);
    i--
}*/

/*do while loop
let i=0;
do
{
    console.log(i);
    i++
}
while(i!=6)*/
//*--------------------------
//functions are just a simple code box that holds between parntheses() /n
//refrences called(prameters) to change later inside the function when it's called /n
//it,goal for reuseablity +shortening the code
//function creating without var +return +calling the function
/*function test(a,b) {
    return a*b;
    
}

console.log(test(6,6)); */

//or without return

/*function test(a,b)
{
    let res=a*b;
    console.log(res);
}

test(5,5);*/

//you can also use IIFE or immedetly invoked function expresstion
//which means it cal it self on the spot whithout the need to call it
/*
console.log();//this is not from the foormula just to show the IIFE
(function(){
console.log("HsI");
})();*/

//functions with alert +prompt+confirm

//alert
/*function test(q,e) {
    if(q,e>=0){
        alert("hii");
    }
}

test(1,1);
*/

/*//prompt
function test(q,e) {
    if(q,e>=0){
        prompt("hii");
    }
}

test(1,1);*/

//confirm
/*function test(q,e) {
    if(q,e>=0){
        confirm("hii");
    }
}

test(1,1);*/

//objects are like box contains *1 values==varibals(called properteies) n/
// and 2* functions(called methods)
//usually it holds key:value releationship

//creating a simple object
/*let s={
    'wow':"khaled",
    1:"shaar"
}

console.log(s.wow);
//or
console.log(s[1]);
*/

//This allows you to create only a single object.
/*Sometimes, we need to set an "object type"
 that can be used to create a number of objects of a single type.
The standard way to create an "object type"
 is to use an object constructor function.*/

//it is simply a function that holds a single object to creat
//new instance of an object and tha's what is called object type
//PS.**This key word means here when object type is created it creats
//a **{this single object} =>within the object type so you can assign
//all the elemnts names or keys to it
//and when a **new key word is used to make an object instanse it will make
// a return function to all of the **this object elements

/*function Test(name,age,color) {
    this.name=name;
    this.age=age;
    this.color=color;
    this.check= function(x,y){
        console.log(x*y);       
    }

    if(this.name=='abdullah'){
        console.log('dsd');
    }   
 }

 let t1= new Test('abdullah',1,"green");
 t1.check(4,4);*/

//----------------------------
//Arrays object
//Arrays are a set of values that stored inside a variable usualy it looks like **[]**
//important to note when you want an element to do anything with inside
// of an array you put the key refrence to it, it always start with  0

//simple example
/*let names= new Array("sd","dsad","d")

console.log(names[0])*/

//you can minpulate data by refrensing it's place in the array

/*let names = new Array('kaled','saleh');

names[0]='hi kaled';
console.log(names[0]);
*/

//you can also creat array in this way

/*let names= new Array(3);

names[0]="khalid";
console.log(names[0]);
*/

//the way to add an array for simplisity is
/*
let names= ['kaled',0,'green'];
console.log(names[0]);
*/

//furthermore you can write like this undefined
//let name =[];

//arrays proprties
//there are couple of arrays properties you should know

//length gives you how many items in an array
/*let names= new Array(5);

console.log(names.length);
*/

//concat to merge arrays together

/*let names= ['kaled',0,'green'];
let names2= ['hi','full','black'];

let names3=names.concat(names2);
console.log(names2);*/

//While many programming languages support arrays
//with named indexes (text instead of numbers), called associative arrays JavaScript does not.
//However, you still can use the named array syntax, which will produce an object.

/*let names= [];
names['first_name']='khaled';
names['last_name']='ali';

console.log(names['first_name']);

you can use push() to add to an array 

let x =["star","moon"];
x.push(['hello']);
console.log(x);

.pop() removes the last element from an array and returns that element.
let x =["star","moon"];
let y=x.pop();


.shift() comes in. It works just like .pop(), except it removes the first element instead of the last

let x =["star","moon"];
let y=x.shift();


Not only can you shift elements off of the beginning of an array, 
you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the
 element at the end of the array, unshift() adds the element at the beginning of the array.

 let x =["star","moon"];
let y=x.shift();
x.unshift("star")


/* 
//----------------------------------------------------------------------
//math object 
/*The Math object allows you to perform mathematical tasks, and includes several properties.*/
//examples //note that in mth object we don't need to creat new object you can use it immedeatly
//console.log(Math.PI);
//console.log(Math.pow(2,3));
//console.log(Math.max(50,51,1514));
//-------------------------------------------------------------------
//the date object
//the date object has to do with time date consept it has many properties
//for example

//setInterval //note that we did not use prameters with setInterval property
/*function alert1() {
    alert('hi there');
} 

setInterval(alert1,3000);
*/

//new Date(), create a new date object with the current date and time

/*let d = new Date()
console.log(d)*/

//The other ways to initialize dates allow for the creation of
//new date objects from the specified date and time
//note that Date objects are static, rather than dynamic
//. The computer time is ticking, but date objects don't change, once created.

/*let a= new Date(86400000);//milliseconds
let b= new Date("January 2, 2015 10:42:00")//dateString
let c= new Date(88,5,11,11,42,0,0)//year, month, day, hours, minutes, seconds, milliseconds

//JavaScript dates are calculated in milliseconds
// from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.
console.log(a);
console.log(b);
console.log(c);*/

//other methods from date can be usfull like this which dispaly the current time to the page
/*function printtime() {
    let date = new Date;
    let hours= date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    document.body.innerHTML="time is "+hours +":"+minutes+":"+seconds;
    
}
setInterval(printtime,1000);*/
//------------------------------------------
//THE (-++_DOM_++-)
//the DOM simply means the tree on which the web page hiraracy is built on
/*               documnt
               ---HTML---
        ---head          body--
*/

//There is a predefined document object in JavaScript
//, which can be used to access all elements on the DOM.
//In other words, the document object is the owner (or root) of all objects in your webpage.

//ocument.body.innerHTML='hi there'

//As body is an element of the DOM, we can access it using the
// document object and change the content of the innerHTML property.
//note that The innerHTML property can be used on almost all HTML
// elements to change its content.

/*
All HTML elements are objects. And as we know every object has properties and methods.
The document object has methods that allow you to select the desired HTML element.
These three methods are the most commonly used for selecting HTML elements

document.getElementById(h2);
document.getElementsByClassName(give_me_hero);
document.getElementsByTagName(h1);

*/

//the document with the specified class name.
//For example, if our HTML page contained three elements
// with class="demo", the following code would return all those elements as an array:

/*Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.
*/

//Similarly, we can change the attributes of elements.
//For example, we can change the src attribute of an image

//var mainimage= document.getElementsByClassName("img");
//mainimage[0].src='img/avatar-richard.png';

/*All CSS properties can be set and modified using JavaScript.
Just remember, that you cannot use dashes (-) in the property names:
 these are replaced with camelCase versions, where the compound words
  begin with a capital letter.
For example: the background-color property should be referred to as backgroundColor.*/

//example
//var background=document.getElementsByTagName('body');
//background[0].style.backgroundColor='white';

//you can additionaly add or remove elements from the dom
//Use the following methods to create new nodes:
//element.cloneNode() clones an element and returns the resulting node.
//document.createElement(element) creates a new element node.
//document.createTextNode(text) creates a new text node.

//var x= document.createElement('h2');
//var y=document.createTextNode('hello')
/*This will create a new text node, but it will
 not appear in the document until you append it to an existing 
 element with one of the following methods:
element.appendChild(newNode) adds a new child
 node to an element as the last child node.*/

//x.appendChild(y)////adding the text to the h2

////adding the h2 to body

/*let body=document.getElementsByTagName('body');
 body[0].appendChild(x);*/

//To remove an HTML element,
//you must select the parent of
// the element and use the removeChild(node) method.
/*
 let papa =document.getElementById('body');
 let chils= document.getElementById("h1");
 papa.removeChild(chils)/*
 
 /*
 An alternative way of achieving the same result would be the
//use of the parentNode property to get the parent of the element 
  we want to remove:

 child[0].parentNode.removeChild(child[0]);
 */

/*To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.*/
/*
 let papa =document.getElementById('body');
 let chils= document.getElementById("h1");
 let img= document.getElementById('img');

 papa.replaceChild(chils,img);*/

//To create an animation, we need to change the properties of an element at small intervals of time
// We can achieve this by using the setInterval() method, which allows us to create a timer and call a
// function to change properties repeatedly at defined intervals (in milliseconds)
/*
 var t= setInterval(move,5000);

 function move(){
     let x= document.getElementById('h1');
     x.style.position="absolute";
     x.style.top=500+'px';
 }
*/

//However, this makes our box move to the right forever. To stop the animation when the box reaches the
//end of the container, we add a simple check to the move() function and use the clearInterval() method
//to stop the timer.
//-------------------------------

//Event listners

/*add event with js: document.getElementById("box").addEventListener("click", functonToDo); Why is this 
considered a best practice? considered best practice because it's much easer to look at js script file,
 and see/maintain event listeners. And let's you add more than one event to element. imagine a real
  webpage..a single page could easily be many hundreds of lines of code. You want to change what
   happens when a specific image is clicked... If done in the webpage, you need to search for
    the element in html to find the function name you previously gave the event
     (or the element containing the img, or containing the container. ...etc.) Then
 switch to the js script and edit the logic associated with the function. easier to maintain and write if it's all in the js file.*/

//Corresponding events can be added to HTML elements as attributes.event thgou it is'nt best practice
//For example: <p onclick="someFunc()">some text</p>

//this is one way of writing an event listner
/*let x= document.getElementById('img');
x.onclick= function alert1() {
    alert("hi")
}*/

//The onload and onunload events are triggered when the user enters or leaves the page. These can be useful
// when performing actions after the page is loaded.

//Similarly, the window.onload event can be used to run code after the whole page is loaded.

/*The onchange event is mostly used on textboxes. The event handler gets called when the text 
inside the textbox changes and focus is lost from the element.*/

/* let x= document.getElementById("txt");
    x.onchange=function uppercase() {
        x.value = x.value.toUpperCase();}*/

/*The addEventListener() method attaches an event handler to an element
 without overwriting existing event handlers. You can add many event handlers to one element.
You can also add many event handlers of the same type to one element, i.e., two "click" events.*/

/*The first parameter is the event's type (like "click" or "mousedown").
The second parameter is the function we want to call when the event occurs.
The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. This parameter is optional,*/

//Note that you don't use the "on" prefix for this event; use "click" instead of "onclick".

/*let x = document.getElementById('img');
x.addEventListener('click',function func(){
    x.style.width='90px';
})*/

//create an event handler that removes itself after being executed:
//x.removeEventListener('click',func());

//-------------------------- event propagation

/*There are two ways of event propagation in the HTML DOM: bubbling and capturing.

Event propagation allows for the definition of the element order when an event 
occurs. If you have a <p> element inside a <div> element, and the user clicks 
on the <p> element, which element's "click" event should be handled first?

In bubbling, the innermost element's event is handled first and then the 
outer element's event is handled. The <p> element's click event is
 handled first, followed by the <div> element's click event.

In capturing, the outermost element's event is handled first and 
then the inner. The <div> element's click event is handled first,
 followed by the <p> element's click event.

 Capturing goes down the DOM.
Bubbling goes up the DOM.*/

//The default value is false, which means the bubbling propagation is used;
//when the value is set to true, the event uses the capturing propagation.
/*let x = document.getElementById("body");
let y = document.getElementById("img");


x.addEventListener('click',function capturing() {
x.style.width='50px';
})true;*/

//--------------------------Image Slider
/*
let image_container = [
    "img/money-Vector.svg",
    "img/hand-Vector.svg",
    "img/speed-Vector.svg",

];

let img_num =0

function next() {
    let slider = document.getElementById('slider');
    img_num++
    if(img_num>=image_container.length){
        img_num=0;
    }
    slider.src=image_container[img_num];
}

function pre(){
    let slider = document.getElementById('slider');
    img_num--;
    if(img_num<0)
    {
        img_num=image_container.length-1


    }
    slider.src=image_container[img_num];
}*/

//-----------------ES6-------------------------
/*ECMAScript (ES) is a scripting language specification created to standardize JavaScript.

The Sixth Edition, initially known as ECMAScript 6 (ES6) and later renamed to
 ECMAScript 2015, adds significant new syntax for writing complex applications,
  including classes and modules, iterators and for/of loops, generators
  , arrow functions, binary data, typed arrays, collections (maps, sets and weak maps)
  , promises, number and math enhancements, reflection, and proxies.*/

//In ES6 we have three ways of declaring variables:
/*  var s=10;
  const s=10;
  let s=10;
  */

//The type of declaration used depends on the necessary scope. Scope is the fundamental
//concept in all programming languages that defines the visibility of a variable.

/*The type of declaration used depends on the necessary scope. Scope is the fundamental
  concept in all programming languages that defines the visibility of a variable.

 var & let
 Unlike the var keyword, which defines a variable globally, or locally to an
  entire function regardless of block scope, let allows you to declare 
  variables that are limited in scope to the block, statement, or expression in which they are used.


  //let is not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context.

  //const variables have the same scope as variables declared using let.
   The difference is that const variables are immutable - they are not allowed to be reassigned.
   const is not subject to Variable Hoisting too, which means that const declarations do not move to the top of the current execution context.
Also note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.*/

/*-----------------------------------Template Literals in ES6------------------------
Template literals are a way to output variables in the string.
Prior to ES6 we had to break the string, for example:*/
/*let name = 'ahmed';
console.log('hello '+name);*/

/*ES6 introduces a new way of outputting variable values in strings
. The same code above can be rewritten as:*/

/*let name='ahmed';
let msg = `hello ${name}`;
console.log(msg);*/

//note that we used the (``)sign here

//---------------------------------Loops in ECMAScript 6-----------------------------
//In JavaScript we commonly use the for loop to iterate over values in a list:
/*let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}*/

//The for...in loop is intended for iterating
//over the enumerable keys of an object.

/*let obj ={'hi':'hi',2:"there",3:"nice to log you"};
for(let v in obj){
    console.log(v);
}*/

/*The for...in loop should NOT be used to iterate 
over arrays because, depending on the JavaScript engine, 
it could iterate in an arbitrary order. Also, the iterating
 variable is a string, not a number, so if you try to do any 
 math with the variable, you'll be performing string concatenation instead of addition.*/

/*ES6 introduces the new for...of loop, which creates a loop iterating over iterable objects.*/

/*let list=['hi','there'];
 for (val of list)
 {
    console.log(val);
 }*/

/*The for...of loop works for other iterable objects as well, including strings*/

/*let charaters = "there is 3 e in this string";
 for (val of charaters)
 {
    console.log(val);
 }*/

/*The for...of loop also works on the newly introduced collections
  (Map, Set, WeakMap, and WeakSet). We will learn about them in the upcoming lessons.
Note that ES6 code will run only in browsers that support it. Older devices and browsers
 that do not support ES6 will return a syntax error.*/

//Prior to ES6, a JavaScript function was defined like this:

/*function func1()
 {
    console.log("hi")
 }
 func1()/*

 /*ES6 introduces a new syntax for writing functions. The same function from above can be written as:*/

/* const add = (x,y)=>{
    console.log(x*y); 
 }
 add(5,3)*/

/*This new syntax is quite handy when you just need a simple function with one argument.
You can skip typing function and return, as well as some parentheses and braces.
For example:*/

/*let greet = x => "hi "+x
console.log(greet("khaled"));*/

/*The code above defines a function named greet that has one argument and returns a message.
If there are no parameters, an empty pair of parentheses should be used, as in*/

/*const func =()=> "welcome";
console.log(func());*/

/*The syntax is very useful for inline functions. 
For example, let's say we have an array, and
 for each element of the array we need to execute 
 a function. We use the forEach method of the array to call a function for each element:*/

/*let list = [1,2,3,4,5]
list.forEach(function(el){
    console.log(el*2+8);
});*/

//However, in ES6, the code above can be rewritten as following:
/*let list = [1,2,3,4,5]
list.forEach(v=>
    {
        console.log(v*2);
    })*/

//default perameteres means if there are no perameters you
//can assign a default value to function's perameters like this

/*const def =(a=5,b=25)=>{
    console.log(a,b);
}
def()*/

//------------------------------------ES6 Objects--------------------
//ES6 introduces shorthand notations and computed property names that make declaring and using objects easier to understand.

//The new method definition shorthand does not require the colon (:) or function keyword,
/*let person ={
     name:'khaled',
     age:25,

     walk() {
        this.age+=50;
     }

};
person.walk();
console.log(person.age);*/

/*You can also use a property value shorthand when initializing properties with a variable by the same name.
For example*/

/*let hight = 10 // height: height,
let  length= 20

let shape={
    hight,
    length
}*/

//When creating an object by using
//duplicate property names, the last property will overwrite the prior ones of the same name.

//NOTE Duplicate property names generated a SyntaxError in ES5 when using strict mode.
// However, ES6 removed this limitation.

/*var a = {x: 1, x: 2, x: 3, x: 4};
console.log(a.x); // 4 */

//---------------------------------Computed Property Names

/*lets suppose that you have a variable somwhere in your code and you want to include it in your object 
this is where you use computed property name to do it for example*/

/*let targeted_name = "key"; //note that whatever value you put here it will be the key when you log


let Object = {

    age:16,
    [targeted_name]:"☠️"  //put the variable name between prackits
};
console.log(Object.key)*/ //this will outpot the value in the object*/

//-----------------------------------------------Object.assign() in ES6
//ES6 adds a new Object method assign() that allows us to combine multiple sources into one
// target to create a single new object.
//Object.assign() is also useful for creating a duplicate of an existing object.

/*let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2


Here we used Object.assign() where the first parameter is the target object you want to apply new properties to.
Every parameter after the first will be used as sources for the target.
 There are no limitations on the number of source parameters.
  However, order is important because properties in the second parameter will be overridden by
   properties of the same name in third parameter, and so on.

In the example above, we used a new object {} as the target and used two objects as sources.*/

//Now, let's see how we can use assign() to create a duplicate object without
//creating a reference (mutating) to the base object.
//in the following example, assignment was used to try to generate a new object. However, using = creates a
//reference to the base object. Because of this reference, changes intended for a new object mutate the original object
/*let person = {
    name: 'Jack',
    age: 18
};

let newPerson = person;
newPerson.name = 'Bob';

console.log(person.name); // Bob
console.log(newPerson.name); // Bob*/

//To avoid this (mutations), use Object.assign() to create a new object.
//For example:
/*let person = {
    name: 'Jack',
    age: 18
};

let newperson =Object.assign({},person);
newperson.name='Abdullah';
console.log(newperson.name);
console.log(person.name); */

//------------------------------------------Array Destructuring in ES6----------------

/*The destructuring assignment syntax is a JavaScript expression that makes it possible to 
unpack values from arrays, or properties from objects, into distinct variables.
ES6 has added a shorthand syntax for destructuring an array.

The following example demonstrates how to unpack the elements of an array into distinct variables:*/

/*
let to_be_destructed= [1,2,3,4]
let [distructed1,distructed2]= to_be_destructed;
console.log(distructed1);
console.log(distructed2);
*/

//We can use also destructure an array returned by a function.
//For example:

/*
let a_function = ()=>{
    return [1,2,3];

}
let [distructed1,,distructed2]=a_function();//Notice that we left the second argument's place empty.
console.log(distructed1);
console.log(distructed2);
*/

//The destructuring syntax also simplifies assignment and swapping values:

/*
let a, b ,c =4,d=8;
[a,b=6]=[2];
console.log(a); // 2
console.log(b); // 6

[c,d] =[d,c];
console.log(c); // 8
console.log(d); // 4
*/

//--------------------------------Object Destructuring in ES6------------------------

//Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.
//For example:

/*let obj ={construct1:'c1',construct2:'c2'}

let{construct1,construct2}=obj;
console.log(construct1);
console.log(construct2);
*/

//We can assign without declaration, but there are some syntax requirements for that:
/*
let a,b;

({a,b}={a:'hi',b:'bye'});

console.log(a+b);
*/

//The () with a semicolon (;) at the end are mandatory when destructuring without a
//declaration. However, you can also do it as follows where the () are not required:

/*
 let{a,b}={a:"hi",b:"wow"};
 console.log(a);
 */

/*You can also assign the object to new variable names.
For example:
*/

/*
let obj={h:25,S:40};

let {h:foo,s:bar}=obj;
console.log(foo);//25
*/

//Finally you can assign default values to variables,
// in case the value unpacked from the object is undefined.
/*
let person={id:3330,name:"mohammed"};

let{id=11111,age=25}= person;

console.log(id);//3330
console.log(age);//25
*/

//---------------------------------ES6 Rest Parameters

/*Prior to ES6, if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function.
For example, let's write a function that checks if an array contains all the arguments passed:*/

/*function containsAll(arr){

    for(k=1;k<arguments.length;k++){

        let num = arguments[k];
        if(arr.indexOf(num)===-1){
            return false;
        }
        
    }
    return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));
*/

/*While this does the job, ES6 provides a more readable
// syntax to achieve variable number of parameters by using a rest parameter:
*/
/*function containsall(arr,...nums){

    for (let num of nums)
    {
        if(arr.indexOf(num)===-1){
            return false
        }
    }
    return true;
}

let test= ["hamad",26]
console.log(containsall(test,"hamad"));
console.log(containsall(test,"khalid"));/*

The ...nums parameter is called a rest parameter. It takes all the 
"extra" arguments passed to the function. The three dots (...) are called the Spread operator.
note that Only the last parameter of a function may be marked as a rest parameter. If there are no extra arguments,
 the rest parameter will simply be an empty array; the rest parameter will never be undefined.
 */

//console.log(Add(1,2,3));
//console.log(Add(4,14,5,9,14));
//console.log(Add(2,36));

//---------------------------------------The Spread Operator---------------
/*This operator is similar to the Rest Parameter, but it has another
 purpose when used in objects or arrays or function calls (arguments).

Spread in function calls

It is common to pass the elements of an.
 array as arguments to a function. Before ES6, we used the following method:
 */

/*function myFunction(w, x, y, z) {
    console.log(w + x + y + z);
}
var args = [1, 2, 3];
myFunction.apply(null, args.concat(4));*/

//ES6 provides an easy way to do the example above with spread operators

/*const myfunc=(w,x,y,z)=>{
    console.log(w+x+y+z);
};

let sum=[1,2,3];
myfunc(...sum,0);
*/

//Before ES6, we used the following syntax to add an item at middle of an array:

/*var arr = ["One", "Two", "Five"];

arr.splice(2, 0, "Three");
arr.splice(3, 0, "Four");
console.log(arr);*/

/*You can use methods such as push, splice, and concat, for example, 
to achieve this in different positions of the array. However, in ES6 the spread operator
lets us do this more easily:*/

/*let names=["moha","khaled","ali","shahad"];

let newnames=['foo',...names,'bar'];

console.log(newnames);*/

//Spread in object literals

//In objects it copies the own enumerable properties from the provided object onto a new object.

/*const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };

const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }
*/

//However, if you try to merge them you will not get the result you expected:

/*const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });

let mergedObj = merge (obj1, obj2);
// { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5 } }

let mergedObj2 = merge ({}, obj1, obj2);
// { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5 } }*/

//Shallow cloning or merging objects is possible with another operator called Object.assign().

//---------------------------------------Classes in ES6

//In this lesson we'll explain how to create a class that can be used to create multiple objects of the same structure.
//A class uses the keyword class and contains a constructor method for initializing.
//example

/*class rectangle
{
    constructor(hight,width){
        this.hight=hight;
        this.width=width;



    }
}

/*A declared class can then be used to create multiple objects using the keyword new.
For example:
*/

/*const shape = new rectangle(5,12);
console.log(shape);*/

/* note Class Declarations are not hoisted while Function Declarations are.
If you try to access your class before declaring it, ReferenceError will be returned

/*You can also define a class with a class expression, where the class can be named or unnamed.
A named class looks like:

var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};


You can also define a class with a class expression, where the class can be named or unnamed.
A named class looks like:

var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3); 

console.log(square.height);

In the unnamed class expression, a variable is simply assigned the class definition:

var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
  }
};

const square = new Square(5, 5);
const poster = new Square(2, 3); 

console.log(square.height);

The constructor is a special method which is used for creating and initializing an object created with a class.
There can be only one constructor in each class.*/

/*Another type of method is the static method, which cannot be called through 
a class instance. Static methods are often used to create utility functions for an application.
For Example:

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(7, 2);
const p2 = new Point(3, 8);

console.log(Point.distance(p1, p2));

As you can see, the static distance method is
 called directly using the class name, without an object.

 */

//-------------------------------Inheritance in ES6------------------------

/*The extends keyword is used in class declarations or class expressions to create a
  child of a class. The child inherits the properties and methods of the parent.
*/
/*
class Animal{
    constructor(name){

        this.name=name;

    }
    speak(){
        console.log(this.name + 'woof woof');
    }
}

class Dog extends Animal{

    speak(){
        console.log(this.name+"here your dog");
    }
}

let dog = new Dog("bobo")

dog.speak();*/

//If there is a constructor present in the subclass, it needs to first call super()
// before using this. Also, the super keyword is used to call parent's methods.

//in other words if you want your new class to use the same mithod  inside the new method
// you should give it super to not confuse the new class

/*class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }
  
  class Dog extends Animal {
    speak() {
      super.speak(); // Super
      console.log(this.name + ' barks.');
    }
  }
  
  let dog = new Dog('Rex');
  dog.speak();
  // Rex makes a noise.
  // Rex barks.
  */

//------------------------------------------------- ES6 Map

/*A Map object can be used to hold key/value pairs. A key or value in a map can be anything (objects and primitive values).

The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each).

An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.

The size property returns the number of key/value pairs in a map.
For example:*/

/*let map = new Map([['k1', 'v11'], ['k2', 'v2']]);

console.log(map.size); // 2
*/

/*Methods
set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key) Returns true if a specified key exists in the map and false otherwise.
delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear() Removes all key/value pairs from map.
keys() Returns an Iterator of keys in the map for each element.
values() Returns an Iterator of values in the map for each element.
entries() Returns an Iterator of array[key, value] in the map for each element.

For example:*/
/*let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');

console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1]);
    */

/*A Set object can be used to hold unique values (no repetitions are allowed).
A value in a set can be anything (objects and primitive values).

The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values.

The size property returns the number of distinct values in a set.
For example:*/

/*let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

console.log(set.size); // 5
*/

/*Methods
add(value) Adds a new element with the given value to the Set.
delete(value) Deletes a specified value from the set.
has(value) Returns true if a specified value exists in the set and false otherwise.
clear() Clears the set.
values() Returns an Iterator of values in the set.*/

//-----------------------------ES6 Promises-------------------
/*A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.

Consider this example:

setTimeout(function() {
    console.log("Work 1");
    setTimeout(function() {
        console.log("Work 2");
    }, 1000);
}, 1000);
console.log("End");

It prints "End", "Work 1" and "Work 2" in that order (the work is done asynchronously). But if there are more events like this, the code becomes very complex.

ES6 comes to the rescue in such situations. A promise can be created as follows:

new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
}); 

Here, resolve is the method for success and reject is the method for failure.

If a method returns a promise, its calls should use the then method which takes two methods as input; one for success and the other for the failure.

For Example:

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

Here, resolve is the method for success and reject is the method for failure.

If a method returns a promise, its calls should use the then method which takes two methods as input; one for success and the other for the failure.

For Example:


asyncFunc("Work 1") // Task 1
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End");

It also prints "End", "Work 1" and "Work 2" (the work is done asynchronously).
 But, this is clearly more readable than the previous example and in more complex situations it is easier to work with.


 //-------------------------------------Iterators & Generators


 Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.

In the example below, we will see how we should implement it and how generator functions are used.
Example:
let myIterableObj = { 
  [Symbol.iterator] : function* () {
    yield 1; yield 2; yield 3;
  }
};
console.log([...myIterableObj]); // [ 1, 2, 3 ]

First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.

In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function).

For example, here is a simple case of how gen functions can be useful:

function* idMaker() {
  let index = 0;
  while (index < 5)
    yield index++;
}
var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// Try to add one more console.log, just like the above see what happens.

We can exit and re-enter generator functions later. Their variable bindings (context) will be
 saved across re-entrances. They are a very powerful tool for asynchronous programming, especially
  when combined with Promises. They can also be useful for creating loops with special requirements.

We can nest generator functions inside each other to create more complex structures and pass them arguments while we are calling them.
The example below will show a useful case of how we can use generator functions and Symbol.iterators together.
Example:


const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};
*/
/*const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. 
.map(i => parseInt(i, 10))
.map(Math.sqrt)
.filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.
.reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above

console.log(all);

We create an object of 7 elements by using Symbol.iterator and generator functions.
 In the second part, we assign our object to a constant all. At the end, we print its value.

 --------------------------------------------------------------------------------------Modules


It is a good practice to divide your related code into modules. Before ES6 there were some libraries which made this
 possible (e.g., RequireJS, CommonJS). ES6 is now supporting this feature natively.

Considerations when using modules:
The first consideration is maintainability. A module is independent of other modules, making improvements and
 expansion possible without any dependency on code in other modules.

The second consideration is namespacing. In an earlier lesson, we talked about variables and scope. As you know,
 vars are globally declared, so it's common to have namespace pollution where unrelated variables are accessible 
 all over our code. Modules solve this problem by creating a private space for variables.

Another important consideration is reusability. When we write code that can be used in other projects, modules 
make it possible to easily reuse the code without having to rewrite it in a new project.

Let's see how we should use modules in JS files.
For Example:
// lib/math.js
export let sum = (x, y) => { return x + y; }
export let pi = 3.14;

// app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)

Here we are exporting the sum function and the pi variable so we can use them in different files.

note that ES6 supports modules officially, however, some browsers are not supporting modules natively yet.
 So, we should use bundlers (builders) such as Webpack or Browserify to run our code.


 ------------------------------------------------------------------Built-in Methods

 array
  The new syntax is cleaner and more robust:

  let res =
[4, 5, 1, 8, 2, 0].find(x => x > 3);

console.log(res);

You can also get the index of the item above by using the findIndex() method:

Repeating Strings

Before ES6 the following syntax was the correct way to repeat a string multiple times:

console.log(Array(3 + 1).join("foo"));

With the new syntax, it becomes:
console.log("foo".repeat(3));

Searching Strings

Before ES6 we only used the indexOf() method to find the position of the text in the string. For example:
console.log("SoloLearn".indexOf("Solo") === 0); // true
console.log("SoloLearn".indexOf("Solo") === (4 - "Solo".length)); // true
console.log("SoloLearn".indexOf("loLe") !== -1); // true
console.log("SoloLearn".indexOf("olo", 1) !== -1); // true
console.log("SoloLearn".indexOf("olo", 2) !== -1); // false

ES6 has replaced this with a version that has cleaner and more simplified syntax:

console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false

It is always a good practice to refactor your code with the new syntax to learn new things and make your code more understandable.
*/

////////////////////needs ordering//////////////////////
//----------------default arguments
/*if a function has not been passed an argument the argument value will be undifind unless we define it by giving it a default value

let func1= (personName,age=12)=>  `${age}  ${personName}`

console.log(func1("Abdullah"));
 */

//-------------rest parameters

/*
when you want to include more than on spesific parameter you 
declare the parameter with a spread operator ((...)) for example
*/

/*function rest(name1,...rest_example){
    console.log(name1,rest_example);
}

rest("abdullah",25,12,23,45,85)*/

//------------------spread operator
/* spread operator spreads the array to be played indvisualy for example*/
/*
let numbers = [25,12,35,48,86];

function spread(num,num1,num2,num3,num4) {
    console.log(num,num1,num2,num3,num4);
}

spread(...numbers)
*/

//------------------------regular expresstion
// it is a widely known method for dealing with strings

// Flags
//Flags are symbols that do certain functionality

/*
g       means for all of the text target this 
i       means to ignore  case sensitivty 
        meata characters means those for example !@#$%^&%*&&^()
.       called the wildcard which means it will compare the text even if it was not idintical like 
/.at/   can bring at or c"at" but it will not work with "heat" because the wildcard replace only one character
\       Escaping Metacharacters that allow to insert meata characters as a text 
//      means space
\t      means tab
\n      means new line
[]      means set which will match every set of characters inside it 
[-]     means range set from - to 
^       means nigtaive which will exclude those characters

----------------sets shortcuts

[\d]     means number range 0123456789
[\w]     means letter and number range including[- and _]
[\s]     means space
[\D]     means does not contain numbers
[\W]     means does not contain letter and number range including[- and _]
[\S]     means does not contain space

---------------Repetition characters
+       means it includes for the letter before this symbol if it comes more than once 
*       means it includes for the letter before this symbol wheater the word has none or one or more 
?       means it includes for the letter before this symbol if it came once or never
{number}      means it includes for the letter before this symbol if it came {number} of times
{number,number} means it includes for the letter before this symbol if it came between {from number,to number} of times


 ----------------Grouping
 ()    means if you want to group a search condition seprate fron onother 

 --------------- Alteration
 (||)   means if you want to group a search condition and you want to alter between them  
 for example (student(name|age|number)) this will make it two groups in one 

 -----------condition
 (?=) means it will check if the value after it is true and include it
  for example (student(?=name|age|number))

  (?!) means it will check if the value after it is true and exclude it


  -----------------------REGEX in java script 
  there is couple of methods that use regular expresstions in javascript like


 ## test
 
 which checks if the expresstion exist or not and return boolian 
  for example 
  const hello ="hi there khalid";
  const theword = \khalid\;
  const checker = theword.test(hello);





 ##replace  
 which replace an expresstion with another
 for example  
 const hello ="hi there khalid";
  const theword = \khalid\;
  const new replaced = hello.replace(theword,"ahmed");


  ##Match

  which return an array with the matching expresstion which is the most simillar thing to regex 101

  for example :
const hello ="hi there khalid";
  const matchingarray = hello.match(\i\g); will return an array of [i,i]





  ##search
  which tells you the index of the first letter 
  for example:
const hello ="hi there khalid";
  const indexofKhalid = hello.search(\khalid\);


*/
/*

---------------------------------------------------------promises
promise is a way of ecexuting certain code after a sertain code is excuted

*/
// example1 using callback function

//console.log("start");

/*function userinfo(name,callback) {
    setTimeout(()=>{
        console.log("**user info recieved");
        callback(name)
    },3000)
    
}
let username= userinfo("khalid",name =>{
    console.log(`your name is ${name}`);
});

console.log("end");*/

// example2 using callback function
/*
console.log("hello ");

function checkAge(age,callback) {
    setTimeout(()=>{
        console.log("waiting for person to grow to "+age);

        callback(age);

    },5000)
    
    
}

checkAge("18",(age)=>{
    console.log("finally you can enter "+age);
    
       
    });
*/

//and now with prmise
/*
console.log("start");
const newUser= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const Userinfo={
            name:"Khalid",
            age:"25"
        }
        resolve(Userinfo)
    },5000)

})
const addNewUser= Userinfo=>{
    let userAge= Userinfo.age;
    let adultAge;
    if (userAge>=18) {
        adultAge= Userinfo.name+"is an adult";
        
    } else {
        adultAge= Userinfo.name+"is an not an adult";
    }
    return Promise.resolve(adultAge);
}

newUser.then(addNewUser)
.then(res=>{
    console.log("**user info resieved**");
    console.log(res);
})
console.log("end");
*/

// promise but with catch
/*
console.log("start");
const newUser= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const Userinfo={
            name:"Khalid",
            age:"11"
        }
        resolve(Userinfo)
    },5000)

})
const addNewUser= Userinfo=>{
    let userAge= Userinfo.age;
    let adultAge;
    if (userAge>=18) {
        adultAge= Userinfo.name+"is an adult";
        return Promise.resolve(adultAge);
    } else {
        adultAge= Userinfo.name+"is an not an adult";
        return Promise.reject(new Error(adultAge))
    }
    
}

newUser.then(addNewUser)
.then(res=>{
    console.log("**user info resieved**");
    console.log(res);
})
.catch(err=>{
    console.log(err.message);
})
console.log("end");
*/

///////////////// -------------------destructuring
//destructuring means to get out elements from an array or an object

// example 1
/*
let arr =[25,40,12,13];
let [first,second,third,fourth]= arr;
console.log(first,second,third,fourth);
*/

//-----------------------undefined destructuring
/*
let arr =[25,40,];
let [first,second,third,fourth]= arr;
console.log(first,second,third,fourth); //third and fourth will be undefind

*/

//-----------------------default undefined destructuring
/*
let arr =[25,40,12];
let [first,second,third,fourth=12]= arr;
console.log(first,second,third,fourth);

//note that the priority will be to the orignal array
*/

//----------------------------skip destructuring an element

/*
let arr =[25,40,12];
let [,first,second,third]= arr;//first will equal = 40
console.log(first,second,third,fourth);
*/
//--------------------------------Nested arrays destructuring
/*
let arr =[25,40,[12,12]];
let [first,second,[third,fourth]]= arr
*/

//--------------------------------swaping destructuring
/*
    let first =7,second=9;
    [first,second]=[second,first]
    */

//--------------------------------Lvalue and Rvalue consept
//you can use the left value to equal the right value without declaring a variable
/*
let arr= ["red","green"];

[arr[0],arr[1]]=["white","black"]

console.log(arr);
*/

//--------------------------------Object destructuring
/*
let Obj ={
    name:"ahmed",
    age:25
}

let {name:thename,age:theage}=Obj;

console.log(thename,theage);
*/

//--------------------------------Object destructuring with the same name
/*
let Obj ={
    name:"ahmed",
    age:25
}

let {name,age}=Obj;

console.log(name,age);
*/
//--------------------------------Object destructuring with the same name but name declared before
/*
let Obj ={
    name:"ahmed",
    age:25
}
let name="khalid",age=25;

({name,age}=Obj)

console.log(name,age);
*/
//---------------------------------nested objects destructuring
/*
let Obj ={
    name:{
        firstName:"ahmed",
        lastName:"ali"
    },
    age:25
}

let{name:{lastName:extractedlastvar},age}=Obj

console.log(extractedlastvar,age);
*/

/* challange matching two arrays
function match_arrays(array1, array2) {
  
        if (array1.length === array2.length) {
          return array1.every(element => {
            if (array2.includes(element)) {
              return true;
            }
      
            return false;
          });
        }
      
        return false;
      }
array1 = ['hello','there','word2']
array2 = ['word2','there','hello'] 
console.log(match_arrays(array1, array2));*/

/*function allSameCase(word) {
    // write your code here
    if (word.match(/[a-z]/g)==undefined||word.match(/[A-Z]/g)==undefined) {
        return true
    }
    else{
        return false
    }

    
}
word = 'HI'
console.log(allSameCase(word)); */

/* my firstfor loop inside onother for loop 
function str_len_comparison(words) {
    // write your code here
    if (words.length==0||words.length==1) {
        return false
    }
   for (let i = 0; i < words.length; i++) {
   
        for (var j =1; j < words.length; j++) {
           
            if(words[i].length==words[j].length){
                
                return true
            }
            else if(words[i].length!=words[j].length)
            {
                return false
            }
            
        }
   }
}
words = ['123','456','789']

console.log(str_len_comparison(words));*/

/*😂😂😂😂😂😂😂😂😂😂😂😂 faild 
function cap_space(txt) {
    // write your code here
    const replased=[];
    
    for (let i = 0; i < txt.length; i++) {
        replased.push(txt[i])
    }



            if (txt.length==replased.length) {
                for (let i = 0; i < txt.length; i++) {
       
                     switch (replased[i]) {
            case "A":
                
            case "B": 
            
            case "C":  
            
            case "D":
                
            case "E":
                
            case "F":
                
            case "G":
                
            case "H":
                
            case "I":
                
            case "J":
                
            case "K":
                
            case "L": 
            console.log(replased[i]);
            
            case "M":
                
            case "N":
                
            case "O":
                
            case "P":
                
            case "Q":
                
            case "R":
                
            case "S":
                
            case "T":  
            
            case "U":
                
            case "V":
                
            case "W":
                
            case "X":
                
            case "Y":
                
            case "Z":
                replased.splice(replased[i-1],2,replased[i-1]+" ")
                 replased.toString();
                
            default:
               console.log("no");
        }
    }
    }
        
           
    


return replased.toString();

        }

        txt = 'iLikeCats'
console.log(cap_space(txt));*/
/*
function cap_space(txt) {
    // write your code here
    const result = txt.replace(/[A-Z]/g, ' $&').toLowerCase().trim();  
    return result
}

txt = 'iLikeCats'
console.log(cap_space(txt))
*/

////////////////////////needs reordering2////////////////////////

//Date class
/*
const fixedDate= new Date(2015,1,22);//first year/note that month will be counted to 11 then it will be 0/d

console.log(fixedDate.getDate());//this will return the day date
console.log(fixedDate.getDay());  //this will return which day of the week with 6 as maximum and the seventh day will be 0
*/

//------------------------MATH
//to round the number to the nearest int number from up
/*let o = Math.ceil(5.6); 
console.log(o);*/

////to round the number to the nearest int number from down
/*let o = Math.floor(5.9); 
console.log(o); */

//to round the number to the nearest int number from 5 up or 4 down

/*let o = Math.round(5.5); 
console.log(o);*/

// to get the absulote value of a number

/*let abs= Math.abs(-2);
console.log(abs);*/

//to get the minimum number in an array for example
/*
let arr = [25,50,13,0,-1]
let min = Math.min(...arr);
console.log(min);
*/

//to get the maximum number in an array for example
/*
let arr = [25,50,13,0,-1]
let max = Math.max(...arr); // we used the spread operator to distruct the array to get every value inside
console.log(max);
*/

// to convert a string to a float
/*let str = "24.6";
let float_convert= parseFloat(str);

console.log(float_convert+1);*/

// to convert a string to an integer
/*let str = "24";
let float_convert= parseInt(str);

console.log(float_convert);*/

//to remove the disimal number from a number

/*let dis = 25.1354;

let removeDicimal= Math.trunc(dis);
console.log(removeDicimal);*/

/// to check of a number is an integer
/*let num = 25.1;
let check = Number.isInteger(num);
console.log(check);*/

/// to check of an input  is not a number
/*let num = "sa";
let check = isNaN(num); 
console.log(check);*/

// to get the power of some number we use two methods
/*let pow1= 2**3;
console.log(pow1);

let pow2= Math.pow(2,5);
console.log(pow2);*/

//to get the square root of a number we use
/*let sqr = Math.sqrt(25);
console.log(sqr);  */

//to check for nigative or positive number or if it is 0 or not a number
/*let pos = 3;
let neg = -3;
let zero = 0;
let nan = "a";
console.log(Math.sign(pos)); // return positive 1
console.log(Math.sign(neg)); // return nigative -1
console.log(Math.sign(zero)); // return zero 0
console.log(Math.sign(nan)); // return NaN
*/

//if a number is devided by 0 this will result infinity data type
/*let pos_inf = 3/0;//Infinity
console.log(pos_inf);
let neg_inf = -3/0;// -Infinity
console.log(neg_inf);
*/

// to generate a random between 0.0 and 0.99 number we use
/*let rnd = Math.random();
console.log(rnd); // example 0.010477123520940657
*/

//for readability you can devide numbers to multiple sections and this will not effect the outpot
/*
let raedable= 135_546_6897;// we use ( _ ) to devide 
console.log(raedable);// result = 1355466897
*/

// there are 4 numerical systems we can use in javaScript

/*

Decimal / 0,1,2,3,4,5,6,7,8,9
Hexadecimal / 0,1,2,3,4,5,6,7,8,9,A,B,C,C,D,E,F  //which means 16 total letters begin from 10 to 15

to use hexadisimal number instead of disimal we write like this  for example
 14 = 0+ (x)=>which refer to hex +e result((0xe)) 


Octal / 0,1,2,3,4,5,6,7
the same with octal 14 will be written like this 0o16

Binary / 0,1
the same with binary 14 will be written like this 0b1110


we convert to any sestem we want by using

let number = 12;

console.log(number.tostring(2)); binary convert 
console.log(number.tostring(8)); octal convert 
console.log(number.tostring(16)); hex convert 
console.log(number.tostring(10)); Dicimal convert 



*/

//------------------------------------callback functions

/*function sum (firstNumber,secondNumber){

  return `[${firstNumber+secondNumber}]`
}

console.log(sum(1,5)); /*

the call back function used for prefent unnesseary repeat lets take this example*/
/*
function sum (firstNumber,secondNumber){

  return firstNumber+secondNumber;
}

function sub (firstNumber,secondNumber){

  return firstNumber-secondNumber;
}

function multiply (firstNumber,secondNumber){

  return firstNumber+secondNumber;
}

// here is our powerfull call back function
                                                   // we add our callback after parameters
function powerful_callback(firstNumber,secondNumber,callback_storage){
return `${callback_storage(firstNumber,secondNumber)} wow right!!!!`;

}
 

console.log(powerful_callback(50,4,sub)); 
*/
//lets take another one shall we ?

/*function first (numberOflives,numberOfdies){

  
  return numberOflives  -numberOfdies;
}



function powerof_callback(numberOflives,numberOfdies,whatever)
{
  if(numberOfdies>=numberOflives)
  {
    return `${whatever(numberOflives,numberOfdies)} condolences`;
  }
  else {
    return `${whatever(numberOflives,numberOfdies)} THERE IS HOPE -__-`
  }
}

console.log(powerof_callback(50,25,first));

*/

// you can also creat the function inside the function parapeters

/*function powe_ofcallback(number1,number2,blahblahblah){

  return `${number1,number2} is a wierd sum for sure`;
}

console.log(powe_ofcallback(3,5,function(number1,number2){

  return number1 +number2
}));*/

// we can also use arrow function to make it more easy in addition if the function has one line you do not need return
/*
function powerOfCallBack(first,second,blah){
  return `${blah(first,second)} is unusual to go this smooth`
}
console.log(
            powerOfCallBack(1,2,(first,second)=>first +second)         
            );
*/

//-------------------------------Advanced Arrays

//--------------------foreach

//let personal_information=["Abdullah",1123485,25];

/*personal_information.forEach(element => {

  if(typeof element == 'string'){
  console.log(element);
} 
  
});*/
//or
/*personal_information.forEach(function(currentValue,index,array) {

  console.log(currentValue);
  console.log(index);
  console.log(array);
  
})*/

//------------------------------------some

//some is powerfull if you want to check wether an element is of a cetain value or not by true or false

//let personal_information=["Abdullah",1123485,25];

/*let confirm_age= personal_information.some(function(element) {
  return element==25;
  
})

console.log(confirm_age);*/

//---------------------------------every
//every check if every element in the array applies to the condition or not

/*let ages=[12,16,18,,21,33];

let are_young= ages.every(function(element) {
  return element >=10
  
})

console.log(are_young);*/

//------------------------------------includes
//include tells us whethre an array  includes a certain element or not

//let names=["ahmed","khaled","عبدالله","samer"]

/*let check_names=names.includes("عبدالله")

console.log(check_names);*/

//you can also specify from where shlould the search begins

//let check_names=names.includes("khaled",-3)
//the second parameter is the index you can also begin the search in revrse meaning
//from the end which will use negative values like this it will keeb going to reach -1

//console.log(check_names);
//-----------------------------------index of vs last index of
//the difference is that index of will return the index of the first ((left to right )) element vs
//last index of will begin the search from the last index ((right to left )) in the array upwards

//note that if the element is not there it will return -1 index

/*let arr=[1,2,3,4,1];

//let chck_index= arr.indexOf(1);
//console.log(chck_index);

let check_index_backwards=arr.lastIndexOf(3,-1)
console.log(check_index_backwards);*/

//------------------------------------------findindex
//find index is usfull if want to find the index to some index if the element meets a certain condition

/*let arr=["ahmed",12,"khaled",26];

let index= arr.findIndex(function (element) {
  return element>=18;
})
console.log(index);*/

//-----------------------------------------find
//find is very functional when you want to find the element that meets a certain condition

/*let evenOrOdd=[2,4,6,8,1];

let we_found_an_odd= evenOrOdd.find(function (element) {
  return element %2!=0;
  
})

console.log(we_found_an_odd);*/

//----------------------------------------filter:
//iamgen that we can filter an array to give us a new array with a value that meets a certain condition amazing right!!!

/*let numbers=[1,2,3,4,5,6,7,264,2354,]

let even_only_VIP_List= numbers.filter(function (elemnt) {
  return elemnt %2===0;
  
});

console.log(even_only_VIP_List);*/

//-------------------------------------------concat
//concat simply merge arrays together

/*let names=["ali","khalid","abdullah"];
let numbers=[25,18,16];

let new_array= names.concat(numbers);

console.log(new_array);

you can also add to the new array more elements straight from the function parameters

let new_array= names.concat(numbers,"ahmed",omar);

and if there was no parameters to the other array the new array will be a copy 

let new_array= names.concat();//just a copy

*/

//-------------------------------------slice
//slice is like a vedio editor but for Arrays 😂 you set the starting index and the last index of the new array
//

/*let colors=["white","black","red","green","blue"]

let new_RGB_colors= colors.slice(2,5);
//note that the end point will be the index after the element not the element index itself
//also if you did not put an end point this will automaticly will slice till the end of the array elements

console.log(new_RGB_colors);*/
//---------------------------------Splice

// OMG you thought that slice was amazing think again because Splice is the real true video Editor ☠️☠️

//let colors=["white","black","red","green","blue"];

//note that because it is only one of three options 1-deleting 2-replacing 3-adding so we do not need a variable
//because it is only editing the orignal array

//Delete
//first  para means the start of the delete second para means the numbers of element you want to....
//colors.splice(2); //will delete from "red" till the end of the array
//colors.splice(0,2);//will delete from "white" till "black" //note that
//colors.splice(1,3,"new","where","came")//will replace the from black to 3elemnts with the new entries 😍
//colors.splice(1,0,"new","without","replacing😍")//will add from the first parameter index ,we put the second (0) to say we only want to add
//console.log(colors);

//-------------------------------------------join

//join function will merge the words in an array to a string
/*
let arr_string=["I","AM","HAPPY","AND","one","piece"];

let full_sentense= arr_string.join(" ");//we add in the parameters what seperate the words
console.log(full_sentense);
*/

//--------------------------------------------sort
// i have a feeling this going to be with us along the way
//sort will sort the array 1-string (alphapaticaly) 2-numbers(from down up )

/*let num=[200,300,600,400,748];
let str=["khalid","mohammed","ahmed"];

num.sort();
str.sort();
console.log(num);
console.log(str);*/

//---------------------------------------reverse

//as the name impies last will be first and so on
/*
let str=["khalid","mohammed","ahmed"];
str.reverse();
console.log(str);*/

//--------------------------------------MAP

//map allows you to do a sertain function on an array and store the new values in a new array;

/*let num=[200,300,600,400,748];

let sQRT= num.map(function(element){
  return element*element;
})

console.log(sQRT);
*/

//-------------------------------------split
//split works as the oppisite of join in which the function will return a string to a new array

/*let full_name="Abdullah ahmed altamimy";

let fullnameArray= full_name.split(" "); 
//also you can set the number of elements you want the function to storelike this
//let fullnameArray= full_name.split(" ",2);
console.log(fullnameArray);*/

//---------------------------------------reduce

//be more attintive in this one
//first reduce will reduce the elements in an array to a single elemnt without an array
//we usually do this if we want for example to know the total of the array ellemnts value or some of it
//you have 4 parameters
// 1-the accumelator which will reserve by default the [0]index number to acmulte with it
//2-currrent value which will  start from index [1]
//3-index which will  start from index [1]
//4-array

/*let unsummed=[2,3,4,9,10];

let sum= unsummed.reduce(function (acumillator,currentvalue,index) {
  return acumillator + currentvalue;
  
})

console.log(sum);*/

//you can make the accumilator start acummlating from another value first in this way
/* let unsummed=[2,3,4,9,10];

let sum= unsummed.reduce(function (acumillator,currentvalue,index) {
  return acumillator + currentvalue;
  
},100)

console.log(sum); */

/* ////email checker
email = 'example@com'
function isEmail(email) {
  // write your code here
  if (
    email.includes("@") &&
    typeof email[0] == "string" &&
    email[email.indexOf("@") - 1] != undefined &&
    email[email.indexOf("@") + 1] != undefined &&
    email.indexOf("@") < email.indexOf(".") &&
    email[email.indexOf(".") + 1] != undefined &&
    email[email.indexOf(".") + 2] != undefined
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmail(email));
*/

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order:function(strterIndex,mainIndex){
    return [this.starterMenu[strterIndex],this.mainMenu[mainIndex]]
  },
  orderDelivery:function({startingTime,ExpectedTime,theorder}){
    console.log(`your order of ${this.order(theorder[0],theorder[1])} has startded in${startingTime} and expected to be delevered in ${ExpectedTime}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza:function (mainIngrediant,...subIngrediants) {
    console.log(mainIngrediant);
    console.log(subIngrediants);
    }
  
};

*/


//Array destructring
/*
let  [first, ,third]=restaurant.categories;
*/

//to switch values you can do it like this
/*
[third,first]=[first,third];
text.textContent=`${first},${third}`;
console.log(first,third);
*/

//methods using destructure
/*
let [starter,main]=restaurant.order(1,1);

console.log(starter);
console.log(main);
*/

//destructure an array indide an array
/*
const arr =[2,5,7,[20,8]];

const [a,b, ,[c]]=arr;

console.log(a,b,c);
*/

//setting default value of an array 

/*
const arr =[2,5,7,[20,8]];

const [a=1,b=2, ,[c=3],d="notFound"]=arr;

console.log(a,b,c,d);
*/


//object destruturing
/*
let{name}= restaurant;
console.log(name);
*/


//if you want to rename the value of a destrcted object
//you can do it like this
/*
let{name:ResturantName}= restaurant;
console.log(ResturantName);
*/


//setting default value of an array 
/*
const {menue=[],starterMenu:mainCourse ="object is not found"}=restaurant;

console.log(mainCourse,menue);
*/

//mutating object variables
/*
let a=12;
let b = 24;
const obj={
  a:5,
  b:6,
  c:9
}
({a,b}= obj );//we add curly braces to tell js we do want to reassign the values that exist 
console.log(a,b);
*/

//nested object destructuring
/*
const {openingHours}=restaurant;

const{sat:{open,close}}=openingHours;

console.log(open,close);
*/

//Example of common way for destructuring an object in method arguments;
/*
const deleveryStatus={
  startingTime:"2:50PM",
  ExpectedTime:"5:50PM",
  theorder:[2,2]
}
restaurant.orderDelivery(deleveryStatus);
*/


//The spread Operator(...)
/*
let arr =[1,5,6];

let badnewArray=[70,54,arr[0],arr[1],arr[2]]// this means that you have insrt every array element manually
console.log(badnewArray);
let goodNewArray=[70,54,...arr];
console.log(goodNewArray);
*/

//you can also add to a new element with a new  array like this
/*
const arr =[1,5,6];
const newArray=[...arr,"hello World"];
console.log(newArray);
*/

//you can use the spread operator to make a shallow copy of an array like this
/*
let arr =[1,5,6];
const theNewArray=[...arr];
console.log(theNewArray);
*/

//you can also join 2 arrays or more using the spread operator like this
/*
let arr =[1,5,6];
let arr2 =[14,64,789];
let joinedArray=[...arr,...arr2]
console.log(joinedArray);
*/

//spread operator works on any itterable like string,maps,sets
/*
let fName="ALI";
let nameLetters=[...fName];
console.log(nameLetters);
*/

//even objects can use the spread operator scince es2021
/*
const theNewResturant={
  ...restaurant
}
*/

//the rest operator is the same (...) but it is on the left side of the (=) operator
//as the name suggests it is used to get the rest of the elements
/*
const arr=[5,8,4,"ahmed","khalid"];

const [a,b,c,...theRestOperator]=arr;
console.log(a,b,c,theRestOperator);//this will give  5 8 4 ['ahmed', 'khalid']
*/

//the rest operator also used on objects
/*
const {mainMenu,...newrestaurant}= restaurant;
console.log(mainMenu);
*/

//you can also use the rest peramater  with functions like this
/*
const addingManyNumbers =(...numbers)=> {
  let num =0;
  numbers.forEach(number => {
    num+=number
  });

  console.log(num)
}
addingManyNumbers(2,56,8,1,54);
*/


/*
restaurant.orderPizza("peper","mashroom","sauce","cetchup")
*/


//short cercuting with the (OR ||) operator
// short cercuting will return true for any data type however if it was false it will change it to the FIRST NEXT TRUTHY value and stop to make it the value
/*

//falsy values Examples undefined , "", 0

console.log(false||"wrong");
console.log(true||"correct");
console.log(2||"2 is not true");
*/
//the short cercuting is commonly used for giving a default value if the initial value is false 

/*

const theResturantExist = restaurant.branch100 ? restaurant.branch100 : "there is no such resturant";
//you can do it even faster with the new logical assignment operator 
restaurant.newAddition ||= "you have no new addition"
console.log(restaurant.newAddition);

*/

//Nullish Coalescing(??)
//  Nullish Coalescing is like the || short cercuting but it handles the nullish values rather than the false values
// Nullish values are : null,undefined (Not "",0)



//example 

/*

const numberOfGuests=0;

//wrong tool usage
console.log(numberOfGuests||10); //this will return 10 which is unwanted result in this case 

//Correct tool usage
console.log(numberOfGuests ?? 10); //this will return 0 which is the correct result in this case

//you can do it even faster with the new logical assignment operator 
console.log(numberOfGuests??=10);

*/




//short cercuting with the (AND &&) operator
// short cercuting && will return  the first false vlaue for any data type however if it was true it will continue to the NEXT TRUTHY value untill it reach the first false value
/*
console.log("ahmed"&&null&&undefined);

// you can even do it like that 
restaurant.orderPizza && restaurant.orderPizza("mashroom","dough")

//you can do it even faster with the new logical assignment operator 
console.log(restaurant.orderPizza &&= null); 

*/




//the for of loop 
//const items=[1,5,4,89,3];
//features
//shorter
//for (const item of items) console.log(items);

//you only can have the index in the for of loop like this
/*
for (const item of items.entries()) {
  console.log(item); //this will return an arrays each array is like this[index,item]
}
*/
//we can even do it in the destructure way like this 
/*
for (const [i,number] of items.entries()) {
  console.log(`${i} is your lucky step and ${number} is your lucky number`); //this will return an arrays each array is like this[index,item]
} 
*/


//optional chaining (?.)
//optional chaining  will stop at any point if the refered chain does not exist
/*
const obj={
  name:{
    first:"ali",
    last:"alshebel"
  },
  age:24,
  job:{
    firstJob:{
      SD:"2years",
      workingAs:"GD"
    },
    
  }
};

*/
//console.log(obj.name.middle.close);// this will cause a refrence error Uncaught TypeError: Cannot read properties of undefined (reading 'close')

//console.log(obj?.name?.middle?.close);//this will return undefined 

//console.log(obj?.name?.first);

//an example of using the optional chaining
/*

const job =["firstJob","secondJob","job"]

for (const name of names) {
  const exist = obj.job[name]?.SD??"less than 1 year"
  console.log(`you've been in your first job  ${exist}`);
}
*/

//you can also use optional chaining for methods calling 

//console.log(restaurant.order?.(1,2)??`method does not exist`); 

//you can also use optional chaining for checking for an empty Array
/*
const anEmptyArray= [];

const aFullArray= [2,4,7];

console.log(anEmptyArray?.[0]??`this Array is empty`);
console.log(aFullArray?.[0]??`this Array is empty`);
*/


//looping ojects  using object keys

/*

const openningHours={
  sat:{
    open:1,
    close:20
  },
  sun:{
    open:1,
    close:20
  },
  mon:{
    open:1,
    close:20
  },
  tus:{
    open:1,
    close:20
  },
  thu:{
    open:1,
    close:20
  }
};

const daysOfOpenningArray=Object.keys(openningHours);

let textOfOpenningDays=`we are open in ${daysOfOpenningArray.length} days of the week `;

for (const day of daysOfOpenningArray ) {
  textOfOpenningDays+=`${day} , `
};

console.log(textOfOpenningDays);
*/




//looping ojects  using object values

/*

const openningHours={
  sat:{
    open:1,
    close:20
  },
  sun:{
    open:1,
    close:20
  },
  mon:{
    open:1,
    close:20
  },
  tus:{
    open:1,
    close:20
  },
  thu:{
    open:1,
    close:20
  }
};

const daysOfOpenningArray=Object.values(openningHours);

let textOfDays=`we are open in `;

for (const {open,close} of daysOfOpenningArray ) {

  textOfDays+=`${open} ,${close} `

};
console.log(textOfDays);

*/


//looping ojects  using object entires

/*
const openningHours={
  sat:{
    open:1,
    close:20
  },
  sun:{
    open:1,
    close:20
  },
  mon:{
    open:1,
    close:20
  },
  tus:{
    open:1,
    close:20
  },
  thu:{
    open:1,
    close:20
  }
};

const daysOfOpenningArray=Object.entries(openningHours);

let textOfDays=`we are open in `;

for (const [day,{open,close}] of daysOfOpenningArray ) {

  textOfDays+=`${day} from  ${open} to ${close} ,  `

};
console.log(textOfDays);

*/


//Coding Challenge #2

/* 
Let's continue with our football betting app!

✅1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
✅2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
//challange 1
//for (const [key,player] of game.scored.entries()) console.log(`player ${key} : ${player}`);

//chalange 2 
//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
/*
let avarageOdd=0;
for (const number of theOddsAray ) {
  avarageOdd+=number;
}
console.log(`the avarage odds are ${avarageOdd/theOddsAray.length}`);
*/


//chalange 3
/*3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
*/
/*
const theOddsAray=Object.entries(game.odds);
for (const [team,score] of theOddsAray) {
  let prediction= game[team]? `victory`:`draw`;
 console.log(`Odd of ${prediction} ${game[team]? game[team]:``}: ${score}`);
}
*/

//chalange 4 
/*
Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

/*
const score={}
for (const scored of Object.values(game.scored)) {

 score[scored] ? score[scored]++ : score[scored]=1
}
console.log(score);
*/

//before es6 javaScript had only 2 data structure
// objects and arrays with ES6 we have 2 more data structure sets and maps

//SETS are a colliction of data that doesn't duplicate values and remove any additional one 
//sets accept itterables 

/*
const orderSet = new Set([
  'pasta',
  'pizza', 
  'pasta',
  'fries',
  'burger']);

  console.log(orderSet);

  */


  /*
  it logs 
  Set(4) {'pasta', 'pizza', 'fries', 'burger'}
[[Entries]]
0
: 
"pasta"
1
: 
"pizza"
2
: 
"fries"
3
: 
"burger"
size
: 
4
*/
/*
console.log(orderSet.size);//will give how many elements inside

console.log(orderSet.has("pizza"));//will check if elements exist simillar to include method in arrays;

console.log(orderSet.add("chicken"));//will add if the element does not exist

console.log(orderSet.delete("pizza"));//will delete the element

for (const order of orderSet) {
  console.log(order);
}
*/
//you can make a set into an an array using the spread operator
/*
const newValues=[...orderSet];
console.log(newValues);
*/

//Maps
// maps are similar to object but it use cases deffer and it can store a key with any value
/*
const theNewMap= new Map();

theNewMap.set("ahmed",1);//this will store the string "ahmed" as a key and 1 as a value

//you can even chain thr set like this
theNewMap.set("first",55).set("s",33);
console.log(theNewMap);
console.log(theNewMap.get("ahmed"));//this is to retrive the value using the key

//you can give an array as the key like this
const arr=[111,2,6];

theNewMap.set(arr,"firstArray")

//you can delete using the key like this
theNewMap.delete(arr);

//you can search if element exist like this 
console.log(theNewMap.has("ahmed"));

//you can know the size of the map like this 
console.log(theNewMap.size);

console.log(theNewMap); 
*/


//setting a default value to a function parameters
/*
const bookings=[]
const createBooking= function(flightNum =1,passengerNum=2,price=0.21){
  
   
    const BookingRecord={
        flightNum,
        passengerNum,
        price
    };
 
    bookings.push(BookingRecord)

    console.log(BookingRecord);


}
createBooking(55,646,) ;
console.log(bookings);

*/
//passing an argument by value vs by reference 
/*
const flight =`departing`;

const johans={
    name:"ali",
    age:25,
}

const bookingFlight = function(flightName,Passanger) {
    
    flightName="arriving"; //this will not change the original becasue it's just a copy 
    Passanger.name= `MR.` + Passanger.name;
} 

bookingFlight(flight,johans);

console.log(flight,johans);

*/

//callBack function example 1
/*


const oneWord = function (str){
    return str.replace(/ /g,"").toLowerCase();

};


const upperFirstWord = function (str){
    const[first, ...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(" ");
    
};  
 
//Higher order function
const transformers = function (str,fn){
console.log(`transformed string is ${fn(str)} and the used function is ${fn.name}`);
};   
transformers("javaScript is the best",upperFirstWord);

transformers("javaScript is the best",oneWord);

*/

//callBack function example 2
/*
const joy= function () {
    console.log("🎉😄");
  };

//addEventListener is a high order function 
document.body.addEventListener("click",joy);
*/

//callBack function example 3
/*

const joy= function () {
    console.log("🎉😄");
  };

//the foreach method will do the function foreach element in the array 
["ali","norah","khalid"].forEach(joy)

*/

//a high order function that returns a function 
/*
const statu= function (state){

    return function name(personName) {
        console.log(`hello ${personName} you look ${state}`);
    }
};

//we stored the returned function in a variable
const state=statu("Happy");

//used the new returned function 
state("ahmed")

//you can even do it like this 
statu("Happy")("hamad")
*/

//a high order (arrow function) function that returns a function 
/*
const statu=  state=> personName  =>
  console.log(`hello ${personName} you look ${state}`);
statu("happy")("ahmed");
*/ 
/*
const airLine={
    airLineName:"saudi Airlines",
    code:"SAAL",
    bookings:[],

    book(flightNum,name){
        console.log(`${name} booked a seat on 
        ${this.airLineName} flight number${flightNum}`);

        this.bookings.push({flight:`${this.airLineName} ${flightNum}`
            ,name})
    }
};
*/
/*
airLine.book(235,"abdullah");
airLine.book(284,"ali");
*/
//console.log(airLine.bookings);
/*
const newAirLine={
    airLineName:"adel Airlines",
    code:"AAL",
    bookings:[],
}

const bushingBookingInfo= airLine.book;
*/
//this will not work because this key word
//will only point to the object that is called with 
//bushingBookingInfo(235,"abdullah")

//to fix this issue we use the function
// (call) method which will allow to redirect the (this) keyword 
/*
bushingBookingInfo.call(newAirLine,2445,"ali");
bushingBookingInfo.call(airLine,235,"abdullah");
*/

//another fix to this issue we use the function
// (apply) method which will allow to redirect the (this) keyword
//but it only accept an array as the seconf argument
//apply is not used these days because we can use
// (call)+ the spread operator (...) to acheive the same result
//const flightInfo=[2445,"ali"]
/*
bushingBookingInfo.apply(newAirLine,flightInfo);
bushingBookingInfo.apply(airLine,flightInfo);
*/

// using (call)+ the spread operator (...)
/*
bushingBookingInfo.call(newAirLine,...flightInfo);
*/

//The function method (bind) gives us the ability
// to repoint (this) keyword by returning the same method but with 
//specefied object bound to the (this ) keyword

/*
const BOUNDbushingBookingInfo= airLine.book.bind(newAirLine);

BOUNDbushingBookingInfo(456,"ahmed");
*/


//The function method (bind) is very usfull with eventListners
/*
airLine.planes=300;

airLine.buyPlane=() => {
    airLine.planes++ 
console.log(airLine.planes);
}
document.querySelector(".buy").addEventListener("click",airLine.buyPlane.bind())
*/

// Immediately Invoked Function Expressions (IIFE) 
//this for making the function runs once and without assigning it to a variable 


//this will give an error because java script expexting the name of the function 
/*
function () {
    console.log(`run only once `);
  }

  */

  //however, we can trick javascript to think that it's an already stated function 
 
  /*
  (function () {
    console.log(`run only once `);
  })()
  */

//this how it would look in an arrow function
//(()=> console.log(`run only once `))()


//clousre
//clousre is a consept that makes a scope that
// preserve the variables from the parent function even if it was no longer in the excution stack
/*
const parent= function (){
const parentVar=25
    return function (){
        console.log(parentVar);
    }
};

const callBackFunc=parent();
callBackFunc();
 
console.dir(callBackFunc)
*/

//console.dir() will show if the function has any clousre in the scope
/*
[[Scopes]]
: 
Scopes[3]
0
: 
Closure (parent)
parentVar
: 
25
*/

//another example of a clousre without a callBack Function


/*
let theHoldingClousreFunc;

const functionExp= function(){
    let a=23
    theHoldingClousreFunc= function (){
         console.log(a*2)
    }
};

const funcExp2=function () { 
    let b=500;
    theHoldingClousreFunc= function (){
         console.log(b*2)
    }
 }

functionExp();

theHoldingClousreFunc();//now the function holds the value of a

funcExp2();
theHoldingClousreFunc()////now the function holds the value of b

*/


//another example of a clousre is with the timer function
/*
const functionParent=function(n,wait){
    let people=n/5;

    //this function used a clousre to preserve the parent
    // function variables even after the function no longer exist in the callStack 
    setTimeout(function () {
        console.log(`your meal for ${n} pizza is ready and it can fill${people} people `);
      },wait*1000);

      console.log(`your meal will be ready in ${wait} seconds`);
};

let people=500;//this will not override the clousre because clousre scope has an even higher priortiy over the scope Chain

functionParent(3,9)
*/


//let arr=["a","b","c","d"];


//Slice
//Slice does not change the original Array
/*
console.log(arr.slice(2)); // this will return a new array sliced from index of 2 till the end of the array

console.log(arr.slice(1,3)); // this will return a new array sliced from index of 1 till the index of 2

console.log(arr.slice(-1)); // this will return a new array sliced from the last index of the array

console.log(arr.slice); // this will return a shallow copy of the  array;
*/


//splice
//Splice  changes the original Array by removing the spliced elements from the array to a new array
/*
console.log(arr.splice(2)); // this will return a new array spliced from index of 2 till the end of the array;

console.log(arr.splice(2,2)); // the second perameter will determain how many elements should be deleted starting from the mentioned first argument
*/


//reverse (effects on the original array)
/*
console.log(arr.reverse()); // this will reverse the elemnts order in the array
*/

//Concat (does not effects on the original array)
/*
let arr2=[1,2,3,4,5];

console.log(arr.concat(arr2)); // this will return combination of the arr2 after the arr1;

//it is the same as [...arr1,...arr2]
*/

//join (effects on the original array)
/*
console.log(arr.join("-")); // this will return a joined string that seperats element by the argument input
*/

//(at) method
//the at method will give the value of the given index number in the argument

//this will do the same as 
/*
arr[1]

//the at methods really shine when you try to get the value of the last index
console.log(arr.at(-1)); // this will return  the value of the last index
*/

// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//bank account depost and withdraw array

//comparing for of to foreach
//the syntax is a little bit defferent but the main defference is
//for of loop accept break and continue while forEach does not 


//for of
for (const [i,movement] of movements.entries()) {
  if (movement<0) {
    console.log(`movement ${i}:you have withdraw`);
  }else{
    console.log(`movement ${i}:you have deposit`);
  }
}

//forEach
//forEach will have a cllback function that gets called on each itiration
movements.forEach(function(movement,i,array){
  if (movement<0) {
    console.log(`movement ${i}:you have withdraw`);
  }else{
    console.log(`movement ${i}:you have deposit`);
  }
})
//forEach loop also works the same with maps and sets
//exept because sets does not have keys so the key will give the same as the value argument
*/
/////////////////////////////////////////////////


//MAP (no effect on the original array)
//map array method will loop over each element in the orriginal array and apply 
//a callBack function to it and then returns a new array with the result
/*
const eurToUsd=1.1;

const usdMovement=movements.map( (mov,i,arr)=> eurToUsd*mov)

console.log(usdMovement); 
*/

/*
const movements=[200,450,-400,3000,-650,-130,70,1300];

//include vs some and every methods

movements.includes(200);//this will return true but
// what if we want to know if the array contains a certain condition ?

//this where some and every come into play 
//we are going to test if some of the array values are positive
movements.some(mov => mov > 0)//this will return true

//every return true if all the elemnts in the array meets the condition
movements.every(mov => mov > 0)//this will return false
*/

/*
//flat and flat map 

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, [450, -400], 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//flat will make any dimention array into one dimention

account1.movements.flat();//this will return one dimention array

//the default dimention depth of flatning is 2 
//if you need to go deeper you can put the depth number in the argument like this 

account1.movements.flat(2);//this will return one dimention array from a depth up to a 3 levels deep

//flatmap 
//flatmap will make a map first which is an array insede an array and then will flat it 
//note that flatmap will only go as far as 2 dimentions only 
*/




//convert and check numbers and working with them 
//numbers in javascript are not accurate when it comes to decimal values
// it actually store them as decimal and then represent them as int
/*
let example;
 console.log(1===1.0);//true
 console.log(0.1+0.2);//0.30000000000000004
//to convert a string to a number javascript Number object has a few methods
// that do what is called boxing which to to take the string and type coortion it to a number 
// as the situation with == sign

let strNum= "123";
let strNum1="10";

console.log(Number(strNum));//Number will automaticaly return a number
console.log(+strNum);//Number will automaticaly return  a number because it is an operational sign;
console.log(+strNum);//Number will automaticaly return  a number because it is an operational sign;

//parsing 
let parsNum= "123px";
let parsNum1="10.5rem";

//this will return only the  number only if the first string index is a string
// the second parameter is for number system type like binary 2 or 10 dicimal
console.log(Number.parseInt(parsNum,10));

console.log(Number.parseFloat(parsNum1,10));// this method is like the firs one but to handle float

//for checking is a number or not

console.log(Number.isFinite(1));
console.log(Number.isFinite(strNum));
*/
//creat a date
/*
const theDate= new Date(2023, 12, 11, 10, 23, 20, 13)
console.log( new Date());//Mon Apr 17 2023 06:35:01 GMT+0300 (Arabian Standard Time)
console.log(theDate.getFullYear());
console.log(theDate.getMonth());
console.log(theDate.getDate());
console.log(theDate.getHours());
console.log(theDate.getMinutes());
console.log(theDate.getSeconds());
console.log(theDate.getMilliseconds());
console.log(theDate.getTime());
console.log(theDate.toISOString());
*/