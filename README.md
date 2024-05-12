# <ins>Javascript</ins>

## [01 - Fundamentals - Part I]

> - _JS has two types of value type (Object and Primitive),_
> - _the 7 primitive data types in Javascript (Number, String, Boolean, Undefined, Null, Symbol, BigInt),_
> - _Javascript has dynamic typing. We dont have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically,_
> - _let could be mutate but const couldn't,_
> - _operator precedence in Javascript_
> - _difference between String and Template Literals,_
> - _if-else statements,_
> - _type conversion (explicit convert) and type coercion(implicit conver) ,_
> - _plus sign is convert to string however minus, divide and multiplication sign is convert to number,_
> - _truthy and falsy values,_
> - _equality operators == vs === ,_
> - _boolean logic and logical operators,_
> - _The switch Statement ,_
> - _Statements don't produce any value as expressions do produce some value and it can be called in template literals with {$x},_
> - _The Conditional(Ternary) Operator,_

## [02 - Fundamentals - Part II]

> #
>
> - _strict mode how to use and what is it used for,_
> - _usage of function in Javascript,_
> - _difference between function expression and function decleration ,_
> - _arrow functions,_
> - _functions calling other functions ,_
> - _push() and unshift() methods in Array,_
> - _pop() and shift() methods in Array,_
> - _indexOf() and includes() methods in Array,_
> - _dot and bracket notation in objects,_
> - _this keyword in objects ,_
> - _break and continue in loops ,_
>
> #

## [03 - Developer Skills]

> #
>
> - _how to work with configuration files ,_
> - _how should think as developer ,_
> - _debugging ,_
>
> #

## [04 - Guess My Number]

Guess My Number is a simple web-based guessing game hosted on Netlify. Player guesses a randomly generated number within a specified range.After player make their guesses into a text field and receive feedback on whether their guess is too high, too low, or correct. The game continues until the player guesses the correct number or the score is end. You can try by clicking <strong>[Guess My Number](https://guess-my-number-gldn.netlify.app/)</strong>

#### Features:

- Random number generation within a specific range.
- User input for guessing the number.
- Feedback on each guess (too high, too low, correct).
- Play again functionality to start a new game.

#### Technologies Used:

- HTML, CSS, JavaScript for front-end development.
- Netlify for hosting the web application.

 <br/> 
   <img src="./ReadME__img/04 - Guess My Number/guessMyNumber.png" alt="Guess My Number">
<br/>

## [05 - Modal]

Modal is a web-based application hosted on Netlify that allows users to interact with modal. Modal dialogs are temporary UI components that overlay the main content of a website and require user interaction before the main content can be accessed again. This application provides an interactive environment for users to experience different types of modal.
You can try by clicking [Modal](https://modal-gldn.netlify.app/)

#### Features:

- Display of various types of modal.
- Interactive across opening, closing modal.

#### Technologies Used:

HTML, CSS, JavaScript for front-end development.
Netlify for hosting the web application.

<br/> 
   <img src="./ReadME__img/05 - Modal/image.png" alt="Modal">
<br/>

## [06 - Pig Game]

Pig Game is a web-based implementation of the classic dice game hosted on Netlify. The game will end if someone holds their score untill '20'. Also the active player come across with '1' or want to keep their score then active player will change. If new game button is clicked then the game start over. <strong> [Pig Game](https://pig-game-gldn.netlify.app/)</strong>

## Features:

- Interactive gameplay where players take turns rolling dice and accumulating points.
- Displaying of current scores for each player.
- While the hold button is kept the current score , dice button creates a random number which if equal to 1 then the active player is changed
- If the score is equal or greate than 20 that means the player win.

## Technologies Used:

HTML, CSS, JavaScript for front-end development.
Netlify for hosting the web application.

<br/> 
   <img src="./ReadME__img/06 - Pig Game/image.png" alt="Modal">
<br/>

## [07 - Behind The Scenes]

> - _Javascript is a high level, garbage collected, interpreted or just-in-time compiled, multi-paradigm, prototype-based object-oriented, first-class functions, Dynamic, Single-threaded, Non-blocking event loop concurrency model. ,_
> - _Every Javascript engine includes a call stack and heap.The Call Stack is actually where our code is executed using something called execution contexts. The Heap is an unstructured memory pool which stores all the objects that our application needs ,_
> - _What does compilation mean? Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.And this machine code is then written into a portable file that can be executed on any computer. Execution can happen way after compilation. It consist of two steps: Compilation and execution ,_
> - _What does interpretation mean? Interpreter runs through the source code and executes it line by line. Code is read and executed all at the same time. It consist of one step:Execution line by line.For executioning the code code should be converted to machine code. It happens right before it's executed,_
> - _What does just-in-time(JIT) compilation mean? Entire code is converted into machine code at once, then executed immediately.This machine code is not a portable file and after compilation execution happens immediately ,_
> - _How does Javascript Engine work? At first code is parsed into a data structure called the abstract syntax tree or AST(Parsing Step). And then the generated AST compiles into machine code(Compilation Step).And this machine code get executed right away. Modern javascript engine use just-in-time compilation(Execution). Execution happens in the javascript engines call stack. Also javascript engine have some optimization strategies. It want to be able to execute code immediately, So while it was executing machine code meanwhile the machine code being optimized and recompiled during the program execution. After each optimization the unoptimized code is swept with optimized code,_
> - _What is Javascript Runtime? It is a container box which is including all the things that we need to use Javascript. Javascript Runtime consist of Javascript Engine(Heap + Call Stack), WEB APIs, Callback Queue ,_
> - _What is WEB APIs? WEB APIs(DOM, Fetch API, Timers, vs.) are functionalities provided to the engine but they aren't part of the Javascript language itself , they are part of Javascript Runtime. Javascript gets access to these APIs through the global window object. ,_
> - _What is Callback Queue? It is a data structure that contains all the callback functions that are ready to be executed. When call stack is empty, the callback function is passed to the stack so that it can be executed. This is called the event loop.The Event Loop takes callback functions from the callback queue and puts them in the call stack so they can be executed,_ > _What the difference between Javascript Runtime in Browser, Javascript Runtime in Node.js? Node.js Runtime also has JS Engine(Heap + Call Stack), Callback Queue but doesn't have WEB APIs. Because WEB APIs are provided by Browser. Instead of WEB APIs Node.js has C++ bindings and thread pool ,_
> - _What is Global Execution Context? It is created for top-level code. Top-level code is code which is not inside of any functions. Functions are executed when they are called. for calling function In global execution context holds functions' name but doesn't hold function body.,_
> - _What is Execution Context? Environment in which a piece pf Javascript is executed. Stores all the necessary information for some code to be executed. Such as local variables and arguments passed into a function. Javascript code always runs inside an execution context. ,_
> - _In any Javascript project there is only one global execution context. It is always there as default context and where top-level code will execute. When the top-level code are executed, functions start to be executed.Each every functions and methods call create its own execution context. ,_
>
> - _What's inside execution context:_ > _1- Variable Environment: (let, const and var declarations, Functions ,Arguments object -all the arguments that were passed into the function.)_ > _2 - Scope Chain - consist of references to variables that are located outside of the current function._ > _3- this keyword:_
>
> - _Execution context is generated right before execution. Arrow functions' execution context doesn't contain this keyword and arguments object.Instead they can use the arguments object and the this keyword from their closest regular function parent._
> - _What is the Call Stack? Where execution contexts get stacked on top of each other to keep track of where we are in the program's execution. The execution context is on top of the stack which is currently running.And it has finished running, it will be removed from the stack and execution will go back to the previous execution context.While running the execution at the top of the Call Stach , other executions have been stopped because Javascript is a single-thread language .So that it can only do one thing at a time.,_
> - _While executing code come across with return keyword, execution has beem stopped and gets popped off the stack. When browser or browser tab is closed, global execution gets popped off the stack. ,_
> - _*What is scope?* Space or environment in which a certain variable is declared.There is global scope, function scope and block scope.,_
> - _*What is scoping?* How our program's variables are organized and accessed. ,_
> - _*What is Lexical Scoping?* Javascript has lexical scoping. Scoping is controlled by placement of functions and blocks in the code. It is the rules of where we can access variables are based on exactly where in code functions and blocks are written. ,_
> - _*What is scope of a variable?* Region of our code where a certain variable can be accessed. ,_
> - _*What is Global Scope?* It keeps top-level code's variables -outside of any function or block- and these variables are accessible everwhere in code ,_
> - _**What is Function Scope?** It is also called "local scope". Variables are only accessible inside function, Not outside. ,_
> - _*What is Block Scope(ES6)?* Variables are only accessible inside block.However this is only applies to let and const variables!! Functions are also block scoped.Variables declared with var end up in the closest function scope.,_
> - _Scope Chain has nothing to do with the order in which function were called. In other words, the scope chain has nothing to do with the order the execution context in the call stack,_
> - _Every scope alway has access to all the varisbles from all its outer scopes. This is the scope chain!,_
> - _When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for.This is called variable lookup.,_
> - _The scope chain is a one-way street. A scope will never ever have access to the variables of an inner scopes ,_
> - _The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes,_
> - _The scope chain has nothing to do with the order in which fuctions were called. It does not affect the scope chain at all!! ,_
> - _**What is hoisting?** It makes some types of variables accessible/usable in the code before they are actually declared."Variables lifted to the top of their scope".But behind the scenes in the creation phase of the execution context, code is scanned for variable declarations, and for each variable a new property is created in the variable environment object.,_
>
> #

<table>
  <tr>
    <th style="background-color: #ddd;"></th>
    <th style="background-color: #ddd;">HOISTED</th>
    <th style="background-color: #ddd;">INITIAL VALUE</th>
    <th style="background-color: #ddd;">SCOPE</th>
  </tr>
  <tr>
    <td>Function declaration</td>
    <td >Yes</td>
    <td> Actual function</td>
    <td >Block -In strict mode. Otherwise:function!!-</td>
  </tr>
  <tr>
    <td>var variables</td>
    <td>Yes</td>
    <td>undefined</td>
    <td>Function</td>
  </tr>
  <tr>
    <td>let and const variables</td>
    <td>No -Technically, yes. But not in practice-</td>
    <td>uninitialized, -TDZ (Temporal Dead Zone)-</td>
    <td>Block</td>
  </tr>
  <tr>
    <td>Function expressions and arrows</td>
    <td colspan="3">Depends if using var or let/const</td>
  </tr>
</table>

> - _**What is TDZ (Temporal Dead Zone)?** Every let and const variables get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined. And the variable is only safe to use after the TDZ,_
> - _**What is TDZ(Temporal Dead Zone) created for ?** Because makes it easier to avoid and catch errors. Using a variable that is set to undefined before it's actually declared can cause serious bugs which might be hard to find. Accessing variables before declaration is bad practice and should be avoided. Also it makes const variables work the way they are suppose to. We can't reassign const variables. It doesn't let them set it to undefined first and then assign their real value later. Const is only assigned when execution actually reaches the declaration.,_
> - _**What is this keyword ?** Special variable that is created for every execution context(for every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used. It is not static, it depends on how the function is called and its value is assigned when the function ia actually called.,_
>
> - Method: this || Object that is calling the method
> - Simple Function Call: this || this = undefined (In strict mode! Otherwise:window (in the browser))
> - Arrow Functions: this || Don't get own this, this of surrounding function(lexical this)
> - Event Listener: this || DOM element that the handler is attached to
>
> - _this does not point to the function itself and also not the its variable environment! ,_
>
> - _Javascript variables consist of primitive types(primitive-variables:Number, String, Boolean, Symbol, BıgInt, Null, undefined) and reference types(Objects: Object literal, Arrays, Functions). Primitive Types are stored in execution context in call stack and Reference Types are store in Heap. Heap and Call Stack are components of Javascript Engine. ,_
> - _**How do primitive types be stored in Javascript Engine?** First Javascript will create an unique identifier with the variable name. Then a piece of memory will be allocated with a certain address and the value will be stored in memory inside of execution context. The point is that the identifier actually points to the address. The variable equals to memory address specified in the call stack. And the variable is assigned an another variable they point out same memory address in call stack because of variables hold the address of value don't hold variable's value. If there is a change in variable's value then the value is not changed, just a new address is created the variable to hold its new value,_
>
> - _**How do reference types be stored in Javascript Engine?** When a new object is created ,it is stored in the heap. The reference type identifier in call stack doesn't point out to the object's memory address in the heap. it points a new piece of memory address that is created in the call stack and this memory address holds the object's address in the heap.That is the reason why we call object reference types. It works this way because objects might be too large to be stored in the stack. Instead they are stored in the heap which is like an unlimited memory pool. And stack just keeps a reference where the object is stored in the heap. When an object assign a value because of the object holds it's own address in the call stack, They will point out same address in the call stack and they have same value, point out same object. When a change is made on this object, both of them get same result. And these variables can be declarated with const because we don't change their value in the stack, we are changing the object's value in heap.Whenever you think that you are copying an object actually tou are creating a new variable to point out same address so that same object's value in the heap.,_
>
> #

<br/>

## [08 - Data Structures And Operators]

> #
>
> - _**What is destructuring?** Destructuring is an ESX feature and it is a way of unpacking values from an array or an object into separate variables. Destructuring is to break a complex data structure down into a smaller data structure like a variable. So for arrays we use destructuring to retrieve elements from the array and store them into variables,_
> - _destructuring arrays,_
> - _destructuring objects,_
> - _The Spread Operator(...) for unpacking all the array elements at one.It takes all the elements out of array.The Spread Operator works on all iterables. Iterables are arrays, strings, maps, sets but not objects.The most built-in data structure in Javascript are iterables but expect objects.,_
> - _Iterables: arrays, strings, maps, sets. NOT objects. We can work with the spread operators on iterables. It gives us mutiple values seperate by a comma and these value is usually used when we pass arguments into a a function or when we build an array.,_
> - _The Rest Patterns uses exact same syntax to collect mutiple elements and condense them into an array. Rest Pattern is opposite of the spread operator.The Spread operator unpacks an array while rest packs elements into an array.The Spread operator is the right side of equal sign but the rest operator is the left side of equal sign. The Rest element doesn't include skip element and the last element should be the rest operator. There is only one rest operator in ant destructuring assignment. ,_
> - _Short Circuiting (&& and ||) the OR operator will return the first truthy value of all the operands or simply the last value if all of them are falsy. The And operator will return the first falsy value or the last value if all of them are truthy. We can use OR operator to set default values and we can use the AND operator to execute code in the second operand,_
> - _The Nullish Coalescing(??) Operator:null and undefined (Not 0 or '') ,_
> - _Logical Assignment Operators (&&=, ||=, ??=),_
> - _usage of for-of Loop and to get index arr.entries() ,_
> - _Optional Chaining(?.) It controls the property which comes before it exist. If the property exists(not null or undefined) then it will evealute the result. If the property doesn't exist it immmediately returns undefined and provides to avoid bugs. It controls the element which the left side of this operator and often use with nullish coalescing operator. ,_
> - _work with Object.keys(obj), Object.values(obj) and Object.entries(obj),_
> - _**What is Set in Javascript?** Set is a collection of unique values. Set has no any dublicates so they are useful in certain situations.Set works with iterable elements and also set can hold different data types. Set similar to an array.Both of them hold a bunch of values grouped together.And just like an arrays sets are also iterables .But sets elements are unique and sets is irrelevant.There is no way of getting values out of a set,_
> - _ has(), add(), clear(), delete() methods with set data ,_
> - _**What is Maps in Javascript?** Map is a data structure that we can use to map values to key. Data is stored key-value pairs in maps. In maps keys can have any type. In objects keys are always strings but in maps we can have any type of key. Like objects, arrays or other maps. ,_
> - _**Which Data Structure to use?** If you need simple list you should choose Array or List. If you need key-value pairs(keys allow us to describe values), you should choose Objects or Maps ,_
> - _**Arrays vs. Sets** When you need ordered list of values(might contain duplicates) and manipulate data, it will be used arrays. When you need to work with unique values and high-performance is really important or remove dublicates from arrays. ,_
> - _**Objects vs. Maps** Objects get easier to write and access values with . and []. When you need functions(methods) or to use this keyword, you should choose objects. Maps can have any type(not just string) and easy to iterate, easy to compute size and provide better performance. ,_
> - _indexOf(), lastIndexOf(), slice(), toLowerCase(), toUpperCase(), trim(), replace(), replaceAll(), includes(), endsWith(), startsWith(), split(), join(), padStart(), padEnd(), repeat() methods in Javascript ,_
>
> #

<br/>

## [09 - Functions]

> #
>
> - _default parameters -if the parameters would be set default value, we can use undefined as value- in Javascript,_
> - _**What is First-Class Functions?** Javascript treats functions as first-class citizens. This means that functions are simply values. Functions are just another "type" of object ,_
> - _**What is Higher-Order Functions?** This is only possible because of first-class functions. A function that receives another function as an argument(like addEventListener()), that returns a new function or both.,_
> - _callback functions in Javascript ,_
> - _call() and apply() methods ,_
> - _the bind() method,_
> - _Immediately Invoked Function Expressions(IIFE) ,_
> - _ **What is Closure in Javascript?** A closure is the closed-over variable environment of the execution context in which a function was created, even after execution context is gone. A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preservers the the scope chain throughout time. A closure makes sure that function doesn't loose connection to variables that existed at the function's birth place and closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created. We don't manually create closures, this is a Javascript feature that happens automatically. We can't even access closed-over variables explicitly.Closure has priority according to scope chain. A closure is not a tangible Javascript object. ,_
>
> #

<br/>

## [10 - Arrays]

> #
>
> - _slice(), splice(), reverse(), concat(), join() methods in arrays,_
> - _at() method in arrays ans string ,_
> - _forEach is a high-order function. forEach calls the callback function which takes as an argument in every iteration. What forEach method does is to loop ever the array and in each iteration it will execute the callback function. Also in each iteration it passes element as an argument to callback function.,_
> - _**What difference is there between forEach and for of loop?** You can not break out of a forEach loop,continue and breal statements don't work any forEach loop at all. forEach will always loop over the entire array. for of loop allows us to break out loop. ,_
> - _forEach with Maps and Sets ,_
> - _insertAdjacentHTML() method in Javascript,_
> - _**What is map() method in Javascript?** map() returns a new array containing the results of applying an operation on all original array elements. It returns an array.,_
> - _**What is filter() method in Javascript?** filter() returns a new array containing the array elements that passed a specified test condition.It returns an array.,_
> - _**What is reduce() method in Javascript?** reduce() boils('reduces') all array elements down to one single value. It returns a variable. ,_
> - _find() method in Javascript. We can use find() method to retrieve one element of an array based on a condition.find() method needs a callback function that returns a Boolean. It doesn't return an array, it returns the first element in the array that fits the condition,_
> - _findIndex() method in Javascript,_
> - _includes() and some() method in Javascript. includes()is more likely to use find a certain value -Equality- and we use some() to know there is any value fit the condition we described. ,_
> - _every() method in Javascript check whether fits condition to every element in array and returns Boolean ,_
> - _flat() and flatMap() method in Javascript flatMap() is a combined method of map() and flat(). But provides us one level flattening, If we need to flat more deeper we should use flat() method.,_
> - _Array.from() method in Javascript ,_
>
> #

<br/>

## [11 - Numbers-Dates-Timers]

> #
>
> - _Number.parseInt(), Number.parseFloat(), Number.isNaN(), Number.isFinite(), Number.isInteger() methods in Javascript,_
> - _Math.trunc() method always removes any decimal part,_
> - _Math.round(), Math.ceil(), Math.floor(), Number.toFixed() methods in Javascript ,_
> - _The Remainder Operatorin javascript ,_
> - _Numeric Separators in Javascript,_ > _new Date(), getTime(),getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds() methods in Javascript ,_
> - _Intl.DateTimeFormat(locale,options) method in Internationalization API ,_
> - _Intl.NumberFormat(locale,options) Internationalization API ,_
> - _setTimeOut() schedules a function to run after a certain amount of time and the callback function is only executed once,_
> - _setInterval() runs the callback function over and over again after the time that passed as an argument,_
>
> #

## What is Bank Statement project?

Bank Statement is a website hosted on Netlify. While I was coding the Bank Statement project, I practice usage of the features which is mentioned 10 - Arrays and 11 - Numbers-Dates-Timers. You can send money, request loan or close your own account. You can login with js-1111 or jd-2222 as user-pin pair. Watch out the timer below the page😉. You can try by clicking <strong>[ Bank Statement ](https://bank-statement-gldn.netlify.app//)</strong>.

#### Technologies Used:

- HTML, CSS, JavaScript for front-end development.
- Netlify for hosting the web application.

 <br/> 
   <img src="./ReadME__img/10-11 -  Bank Statement/bankStatement--1.png" alt="Bank Statement">
<br/>
 <br/> 
   <img src="./ReadME__img/10-11 -  Bank Statement/bankStatement--2.png" alt="Bank Statement">
<br/>
 <br/> 
   <img src="./ReadME__img/10-11 -  Bank Statement/bankStatement--3.png" alt="Bank Statement">
<br/>
 <br/> 
   <img src="./ReadME__img/10-11 -  Bank Statement/bankStatement--4.png" alt="Bank Statement">
<br/>
 <br/> 
   <img src="./ReadME__img/10-11 -  Bank Statement/bankStatement--5.png" alt="Bank Statement">
<br/>

 <br>

## [12 - Advanced-DOM-Bankist]

> #
>
> - _**What is the DOM?** DOM is basically the interface between all Javascript code and the browser. DOM is HTML documents are rendered in and by browser.,_
> - _DOM allows us to make Javascript interact with the browser. We can write Javascript to create, modify and delete HTML elements, set styles, classes and attributes and listen, respond to events.,_
> - _DOM three is genereted from an HTML document, which can interact with. DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree ,_
> - _**What is a DOM tree?** DOM tree like structure made out of nodes. In the DOM there are different types of nodes. ,_
> - _**How the DOM API is organized behind the scenes ?** Each node is represented in Javascript by an object. This object gets access to special node methods and properties, such as text content, child nodes, parent nodes and many others ,_
> - _Node type has a couple of child types. These are the element type, the text type, the comment type and also the document type. The Element type has internally an HTML element and that element type itself has exactly one child type that exists in HTML. Like buttons, links, img etc. ,_
> - _There is a special node type called EventTarget which is a parent of both the node type and window node type has addEventListener() method and all nodes type inherits this method ,_
>
>   <br/> 
>   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/DOM.png">
>
>   <br/>
>
> - _while querSelectorAll() method returns NodeList, getElementByTagName() and getElementsByClassName() return an HTMLCollection. HTMLCollection is updated automatically.NodeList doesn't update itself automatically ,_
> - _We use textContent and innerHTML to get and set HTML elements properties.,_
> - _insertAdjacentElement(), prepend() and append() methods to insert a DOM element to HTML ,_
> - _before() and after() methods in HTML,_
> - _remove() and removeChild() methods in Javascript ,_
> - _With style property we can set the value of property as inline css and we can get the value of property if it is declared as inline css rule ,_
> - _document.documentElement.style.setProperty('a','#345654') ,_
> - _getBoundingClientRect() is basically relative with visible view port,_
> - _window.scrollTo() and htmlElement.scrollIntoView({behavior:'smooth'}) ,_
> - _addEventListener and removeEventListener() ,_
> - _When we trigger an event then this event goes down through the target element just passes its parents element. It is named as capturing phase and when it arrived the target element then event goes up and this is names as bubling phase . In bubling phase parent elements can handle this event too, Actually when parent element catches event can be changed by giving a boolean third argument to event handler functions.Also e.target point to click elemnent e.currentElement points to this keyword - element was attached to event handler- ,_
> - _DOM Traversing with children, childNodes, firstElementChild, lastElementChild, parentElement, parentNode, previousElementSibling, nextElementSibling properties and closest() method._
> - _The Intersection Observer API ,_
> - _How to implement lazy Loading strategy with The Intersection API in Javascript ,_
> - _DOM content loaded event is fired by the document as soon as the HTML is completely parsed. This means HTML has been downloaded and been converted to the DOM tree. Also all scripts must be downloaded and executed before the DOM content loaded event can happen. This event does not wait for images and other external resources to load, just HTML and Javascript need to be loaded. We put the script tag at the end of the body to be sure about HTML has been parsed. We can access this event by document.addEventListener('DOMContentLoaded', function(){} ) ,_
> - _When all the images and external resources like CSS has finished loading is load event gets fired. This event happens on window ,_
> - _beforeunload event gets fired on window. This event is created immediately before a user is about to leave a page.Some browsers require to implement e.preventDefault() for working accurately. ,_
> - _We can write the script tag in the document head or at the end of the body. When we include a script without any attribute in the head first HTML code start to be parsed by the browser. Parsing HTML is basically building the DOM tree from the HTML elements. While parsing the HTML, it will find the script tag and start to fetch the script and then execute it. During this time HTML parsing will stop and after the script get executed the rest of the HTML can be parsed. And at the and of the parsing DOM content loaded event will finally get fired. When we define script tag at the end of the body, All HTML is parsed when it reaches the script tag. Then the script is fetched and then the script gets executed. ,_
> - _When we use async attribute during the script loading in the head of the document, the script is fetched at the same time as the HTML is parsed. However, the HTML parsing still stops for the scripts execution. The script is downloaded asynchronously but then is executed right away in a synchronous way. So the HTML code has to wait for being parsed ,_
> - _When we use the defer attribute during the script loading in the head, the script is loaded asynchronously but the execution of the script is deferred until the end of the HTML parsing. HTML parsing is never interrupted because the script is only executed at the end. ,_
> - _When we defined the script tag at the end of the body scripts are fetched and executed after the HTML is completely parsed. This approach is used if you need to support old browsers,_
> - _When we define the script tag with async attribute in the head of html, scripts are fetched asynchronously and executed immediately. Usually the DOMContentLoaded event waits for all scripts to execute, except for async scripts. So DOMContentLoaded does not wait for an async script. Scripts not guaranteed to execute in order so it uses for 3rd-party scripts where order doen't matter. ,_
> - _When we define the script tag with defer attribute, scripts are fetched asynchronously and executed after the HTML is completely parsed. DOMContentLoaded event fires after defer script is executed. Scripts are executed in order. This is the best solution when order matters! ,_
>
> <br>
>   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/defer-async.png"/>
> <br>
>
> #

<br/>

## What is Bankist project?

Bankist is a website hosted on Netlify. While I was coding the Bankist project, I practice usage of Observer API,
lazy loading while fetching images, DOMContentLoaded event and above features. You can try by clicking <strong>[Bankist ](https://bankist-gldn.netlify.app/)</strong>

#### Technologies Used:

- HTML, CSS, JavaScript for front-end development.
- Netlify for hosting the web application.

 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--1.png" alt="Bankist">
<br/>
 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--2.png" alt="Bankist">
<br/>
 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--3.png" alt="Bankist">
<br/>
 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--4.png" alt="Bankist">
<br/>
 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--5.png" alt="Bankist">
<br/>
 <br/> 
   <img src="./ReadME__img/12 - Advanced-DOM-Bankist/bankist--6.png" alt="Bankist">
<br/>

<br/>

## [13 - Object Oriented Programming]

> #
>
> - _What is Object-Oriented Programming (OOP)? Object-oriented programming is a programming paradigm(how we write and organize code) based on the concept of objects.,_
> - _We use objects to model or describe real word or abstract features. Objects may contain data(properties) and code(methods). By using objects, we pack data and the corresponding behavior into one block. In OOP, objects are self-contained pieces/blocks of code and objects are building blocks of applications, and interact with one another. This interactions happen through a public interface(API):methods that the code outside of the object can access and use to communicate with the object. ,_
> - _OOP was developed with the goal of organizing code to make it more flexible and easier to maintain(avoid "spaghetti code") ,_
> - _We use class to generate, create objects. Class can be thought as a blueprint which can then be used to create new objects based on the rules described in the class. We call all objects created through a class instances of that class. Class is just a plan and instance is a real object that we can use in our code which was created from a class. ,_
> - _**How do we actually design classes? How do we model real-word data into classes?** There are four fundamental OOP Principles that can guide us toward a good class implementation. These principles are abstraction, encapsulation, inheritance and polymorphism ,_
> - _**What is Abstraction?** Abstraction means to ignore or hide details that don't matter. This allows us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation. ,_
> - _**What is Encapsulation?** Encapsulation means to keep properties and methods private inside the class, so they are not accessible from outside of the class. Some methods can be exposed as a public interface which we call API. **Why private methods and properties exist?** Because that prevents external code from accidentally manipulating internal properties/state and allows us to change internal implementation without the risk of breaking external code. ,_
> - _**What is Inheritance?** Inheritance makes all properties and methods of a certain class available to a child class which forms a hierarchy between these two classes. This allows us to reuse common logic and to model real-word relationships.Child class extends parent class. Child class has some methods and properties from its parent and some of its own ,_
> - _**What is Polymorphism?** Polymorphism means "many shapes" . A child class can overwrite a method that it inherited from a parent class ,_
> - _**How does OOP actually work in Javascript?** All objects are linked to a certain prototype object. Each object has a prototype. The prototypes object contains methods and properties and all objects that are linked to that prototype can access and use. This behavior is usually called prototypal inheritance ,_
> - _**How is Prototypal Inheritance?** Prototypal Inheritance means all objects that are linked to a certain prototype object can use the methods and properties that are defined on that prototype. Objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal Inheritance. The prototype contains methods(behavior) that are accessible to all objects linked to that prototype.Object behavior is delegated to the linked prototype object. Besides prototypal inheritance we also call this mechanism delegation. ,_
> - _In classical OOP, one class inheriting from another class.But in Javascsript basically an instance inheriting from a class. Objects delegate their behavior to the prototype. On the other hand, in the classical OOP with classes the behavior(methods) are copied from the class to all instances. ,_
> - _We can implement prototypal inheritance in Javascript with three ways. These are Constructor functions, ES6 Classes and Object.create() ,_
> - _**What is Constructor functions?** Constructor functions are a way of creating objects programmatically using a function which will also set the new object's prototype and this is actually how built-in objects like Arrays, Maps, Sets are implemented ,_
> - _**What is ES6 Classes?** ES6 classes are the more modern way of doing OOP in Javascript. They are called "Syntactic sugar" behind the scenes, ES6 classes work exactly like constructor functions. ES6 classes do not behave like classes in "classical OOP" And behind the scenes, ES6 classes are implemented with constructor functions. So they also use prototypal inheritance. ,_
> - _**What is Object.create()?** It is the easiest way of linking an object to a prototype object ,_
> - _When we call a constructor function with new keyword first a new empty object is created, second function is called and this keyword will be set this empty object(That is why constructor is defined with function expression or declaration not arrow function).The third step is this newly created object is linked to a prototype. The last step is that the object was created in the beginning is then automatically returned from the constructor function. ,_
> - _Every object and function has its own Prototype Object. So Constructor function has it own Prototype object which can be access via .prototype properties. When we create a new object first new empty object is created and and this keyword in constructor function is call set to the new object. The new object is linked (\_\_proto\_\_ property) to constructor functions prototype property. The new object is returned from the constructor function call. ,_
>
> - _**How does the prototype chain work?** When we try to access a property or method in object if it doesn't be found in objects then search is done in its Prototype.If it again doesn't be found in its Prototype object the searching is being continued to its prototype object. Constructor's prototypes is an object so it has its own Object.prototype object that is Object() constructor functions prototype property. And its \_\_proto\_\_property is set to null. That searching is called "Prototype Chain" ,_
> - _Classes are not hoisted and they are first-class citizens( we can pass them into functions and return them from functions). Classes are executed in strict mode. ,_
> - _We call getter and setter properties assessor properties while the normal properties are called data properties. ,_
> - _setters and getters in Javascript ,_
> - _**What is static methods in Javascript?** Array.from() method or Number.parseInt() methods are static methods. from() or parseInt() method is attached to the constructors. We could not use the from method on an array. from() method is attached to constructor not to the prototype of the constructor so instances can not access this method. We also say from method is in the Array name space ,_
> - _Object.create() create a new object and the prototype of that object will be the object that we passed in,_
>
> #

<br/>

## [14 - Mapty]

Mapty is a website hosted on Netlify. You can keep your sport activity registered and also you can describe its type as running or cycling. When you allow the browser and it loads the map, you can click the map. If you click the map, the form will be opened and Mapty will calculate the speed or the pace value acording to your sport type. If you cliked an activity in your list, the map will display that location. You can try by clicking <strong>[ Mapty ](https://mapty-gldn.netlify.app/)</strong>.

#### Technologies Used:

- HTML, CSS, JavaScript, Leaflet library for front-end development.
- Netlify for hosting the web application.

 <br/> 
   <img src="./ReadME__img//14 -Mapty/mapty--1.png" alt="Mapty">
<br/>
 <br/> 
   <img src="./ReadME__img//14 -Mapty/mapty--2.png" alt="Mapty">
<br/>

 <br>

## [15 - Asynchronous]

> #
>
> - _What is Object-Oriented Programming (OOP)? Object-oriented programming is a programming paradigm(how we write and organize code) based on the concept of objects.,_
> - _We use objects to model or describe real word or abstract features. Objects may contain data(properties) and code(methods). By using objects, we pack data and the corresponding behavior into one block. In OOP, objects are self-contained pieces/blocks of code and objects are building blocks of applications, and interact with one another. This interactions happen through a public interface(API):methods that the code outside of the object can access and use to communicate with the object. ,_
> - _OOP was developed with the goal of organizing code to make it more flexible and easier to maintain(avoid "spaghetti code") ,_
> - _We use class to generate, create objects. Class can be thought as a blueprint which can then be used to create new objects based on the rules described in the class. We call all objects created through a class instances of that class. Class is just a plan and instance is a real object that we can use in our code which was created from a class. ,_
> - _**How do we actually design classes? How do we model real-word data into classes?** There are four fundamental OOP Principles that can guide us toward a good class implementation. These principles are abstraction, encapsulation, inheritance and polymorphism ,_
> - _**What is Abstraction?** Abstraction means to ignore or hide details that don't matter. This allows us to get an overview perspective of the thing we're implementing, instead of messing with details that don't really matter to our implementation. ,_
> - _**What is Encapsulation?** Encapsulation means to keep properties and methods private inside the class, so they are not accessible from outside of the class. Some methods can be exposed as a public interface which we call API. **Why private methods and properties exist?** Because that prevents external code from accidentally manipulating internal properties/state and allows us to change internal implementation without the risk of breaking external code. ,_
> - _**What is Inheritance?** Inheritance makes all properties and methods of a certain class available to a child class which forms a hierarchy between these two classes. This allows us to reuse common logic and to model real-word relationships.Child class extends parent class. Child class has some methods and properties from its parent and some of its own ,_
> - _**What is Polymorphism?** Polymorphism means "many shapes" . A child class can overwrite a method that it inherited from a parent class ,_
> - _**How does OOP actually work in Javascript?** All objects are linked to a certain prototype object. Each object has a prototype. The prototypes object contains methods and properties and all objects that are linked to that prototype can access and use. This behavior is usually called prototypal inheritance ,_
> - _**How is Prototypal Inheritance?** Prototypal Inheritance means all objects that are linked to a certain prototype object can use the methods and properties that are defined on that prototype. Objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal Inheritance. The prototype contains methods(behavior) that are accessible to all objects linked to that prototype.Object behavior is delegated to the linked prototype object. Besides prototypal inheritance we also call this mechanism delegation. ,_
> - _In classical OOP, one class inheriting from another class.But in Javascsript basically an instance inheriting from a class. Objects delegate their behavior to the prototype. On the other hand, in the classical OOP with classes the behavior(methods) are copied from the class to all instances. ,_
> - _We can implement prototypal inheritance in Javascript with three ways. These are Constructor functions, ES6 Classes and Object.create() ,_
> - _**What is Constructor functions?** Constructor functions are a way of creating objects programmatically using a function which will also set the new object's prototype and this is actually how built-in objects like Arrays, Maps, Sets are implemented ,_
> - _**What is ES6 Classes?** ES6 classes are the more modern way of doing OOP in Javascript. They are called "Syntactic sugar" behind the scenes, ES6 classes work exactly like constructor functions. ES6 classes do not behave like classes in "classical OOP" And behind the scenes, ES6 classes are implemented with constructor functions. So they also use prototypal inheritance. ,_
> - _**What is Object.create()?** It is the easiest way of linking an object to a prototype object ,_
> - _When we call a constructor function with new keyword first a new empty object is created, second function is called and this keyword will be set this empty object(That is why constructor is defined with function expression or declaration not arrow function).The third step is this newly created object is linked to a prototype. The last step is that the object was created in the beginning is then automatically returned from the constructor function. ,_
> - _Every object and function has its own Prototype Object. So Constructor function has it own Prototype object which can be access via .prototype properties. When we create a new object first new empty object is created and and this keyword in constructor function is call set to the new object. The new object is linked (\_\_proto\_\_ property) to constructor functions prototype property. The new object is returned from the constructor function call. ,_
>
> - _**How does the prototype chain work?** When we try to access a property or method in object if it doesn't be found in objects then search is done in its Prototype.If it again doesn't be found in its Prototype object the searching is being continued to its prototype object. Constructor's prototypes is an object so it has its own Object.prototype object that is Object() constructor functions prototype property. And its \_\_proto\_\_property is set to null. That searching is called "Prototype Chain" ,_
> - _Classes are not hoisted and they are first-class citizens( we can pass them into functions and return them from functions). Classes are executed in strict mode. ,_
> - _We call getter and setter properties assessor properties while the normal properties are called data properties. ,_
> - _setters and getters in Javascript ,_
> - _**What is static methods in Javascript?** Array.from() method or Number.parseInt() methods are static methods. from() or parseInt() method is attached to the constructors. We could not use the from method on an array. from() method is attached to constructor not to the prototype of the constructor so instances can not access this method. We also say from method is in the Array name space ,_
> - _Object.create() create a new object and the prototype of that object will be the object that we passed in,_
>
> #

<br/>

## [16 - Modern Javascript Modules Tooling]

> #
>
> - _**What is module in Javascript?** Module is reusable piece of code that encapsulates implementation details. Module is usually a standalone file. Modules stored in files, exactly one module per file. ,_
> - _Modules provide Compose software, isolate components, abstract code, organized code, reuse code. ,_
> - _Compose software means modules are small building blocks that we put together to build complex applications ,_
> - _Isolate components means modules can be developed in isolation without thinking about entire code ,_
> - _Abstract Code means implementing low-level code in modules and import these abstractions into other modules ,_
> - _Organized Code means that modules naturally lead to a more organized codebase ,_
> - _Reuse Code means that modules allows us to easily reuse the same code, even across multiple projects. ,_
> <table>

  <tr>
    <th style="background-color: #ddd;"></th>
    <th style="background-color: #ddd;">ES6 MODULE</th>
    <th style="background-color: #ddd;">SCRIPT</th>
  </tr>
  <tr>
    <td>Top-level variables</td>
    <td>Scoped to module</td>
    <td>Global</td>
  </tr>
  <tr>
    <td>Default mode</td>
    <td>Strict mode</td>
    <td>"Sloppy" mode</td>
  </tr>
  <tr>
    <td>Top-level this keyword</td>
    <td>undefined</td>
    <td>window</td>
  </tr>
  <tr>
    <td>Imports and exports</td>
    <td>YES</td>
    <td>NO</td>
  </tr>
   <tr>
    <td>HTML linking</td>
    <td>< script type="module"></td>
    <td>< script ></td>
  </tr>
   <tr>
    <td>File downloading</td>
    <td>Asynchronous</td>
    <td>Synchronous</td>
  </tr>
 </table>

- _Imports gets needed to happen at top level. Imports are hoisted.,_
- _Modules are hoisted and then imported synchronously while the module parsing. This makes easy to delete code not even necessary. So by knowing all dependencies between modules before execution bundlers like webpack and Parcel can then join multiple modules together and eliminate code that why we can only import and export outside of any code like function or an if block.,_
  > - _After parsing these modules asynchronously downloading from the server. When module arrives then it is parsed and the module exports are linked to the import value in html file. and this connection is a life connection. Exported values are not copied to imports. Instead, the import is basically just a reference to the exported value, like a pointer. When the value changes in the exporting module then the same value also changes in the importing module. And then the code in the imported modules is executed.,_
  > - _When we wnat to export one thing , we use default export otherwise we use Named export is used ,_
  > - _Top-Level await(ES2022) ,_
  > - _Which benefits do Babel and Parcel provide us?_
  > - _how to write clean code in Javascript,_
  > - _There are two different paradigms in Javascript. Imperative and declarative. Imperative paradigm explains "How to do things?". We explain the computer every single step it has to follow to achieve a result. Declarative paradigm tells what to do. We simply describe the way the computer should achieve the result. ,_
  > - _**What is Functional Programming?** It is a declarative programming paradigm and it is based on the idea of writing software by combining multiple so called pure functions while avoiding side effects and mutating data. ,_
  > - _Side effects: Modification(mutation) of any data outside of the function. ,_
  > - _Pure function: Function without side effects. Does not depend on external variables. Given the same inputs always retuns the same outputs. ,_
  > - _Immutability: State(data) is never modified. Instead, state is copied and the copy is mutated and returned. It makes it so much easier to keep track of how the data flows through our entire application. ,_
  >
  > #
