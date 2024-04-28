### What did I learn while coding this project ?

> #
>
> - _Javascript is a high level, garbage collected, interpreted or just-in-time compiled, multi-paradigm, prototype-based object-oriented, first-class functions, Dynamic, Single-threaded, Non-blocking event loop concurrency model. ,_
> - _Every Javascript engine includes a call stack and heap.The Call Stack is actually where our code is executed using something called execution contexts. The Heap is an unstructured memory pool which stores all the objects that our application needs ,_
> - _What does compilation mean? Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.And this machine code is then written into a portable file that can be executed on any computer. Execution can happen way after compilation.It consist of two steps: Compilation and execution ,_
> - _What does interpretation mean? Interpreter runs through the source code and executes it line by line.Code is read and executed all at the same time. It consist of one step:Execution line by line.For executioning the code code should be converted to machine code. It happens right before it's executed,_
> - _What does just-in-time(JIT) compilation mean? Entire code is converted into machine code at once, then executed immediately.This machine code is not a portable file and after compilation execution happens immediately ,_
> - _How does Javascript Engine work? At first code is parsed into a data structure called the abstract syntax tree or AST(Parsing Step). And then the generated AST compiles into machine code(Compilation Step).And this machine code get executed right away. Modern javascript engine use just-in-time compilation(Execution). Execution happens in the javascript engines call stack. Also javascript engine have some optimization strategies. It want to be able to execute code immediately, So while it was executing machine code meanwhile the machine code being optimized and recompiled during the program execution. After each optimization the unoptimized code is swept with optimized code,_
> - _What is Javascript Runtime? It is a container box which is including all the things that we need to use Javascript. Javascript Runtime consist of Javascript Engine(Heap + Call Stack), WEB APIs, Callback Queue ,_
> - _What is WEB APIs? WEB APIs(DOM, Fetch API, Timers, vs.) are functionalities provided to the engine but they aren't part of the Javascript language itself , they are part of Javascript Runtime. Javascript gets access to these APIs through the global window object. ,_
> - _What is Callback Queue? It is a data structure that contains all the callback functions that are ready to be executed. When call stack is empty, the callback function is passed to the stack so that it can be executed. This is called the event loop.The Event Loop takes callback functions from the callback queue and puts them in the call stack so they can be executed,_ > _What the difference between Javascript Runtime in Browser, Javascript Runtime in Node.js? Node.js Runtime also has JS Engine(Heap + Call Stack), Callback Queue but doesn't have WEB APIs. Because WEB APIs are provided by Browser. Instead of WEB APIs Node.js has C++ bindings and thread pool ,_
> - _What is Global Execution Context? It is created for top-level code. Top-level code is code which is not inside of any functions. Functions are executed when they are called. for calling function In global execution context holds functions' name but doesn't hold function body.,_
> - _What is Execution Context? Environment in which a piece pf Javascript is executed. Stores all the necessary information for some code to be executed. Such as local variables and arguments passed into a function. Javascript code always runs inside an execution context. ,_
> - _In any Javascript project there is only one global execution context. It is always there as default context and where top-level code will execute. When the top-level code are executed, functions start to be executed.Each every functions and methods call create its own execution context. ,_
>
> -What's inside execution context
>
> - 1- Variable Environment:
>   - let, const and var declarations,
>   - Functions,
>   - Arguments object -all the arguments that were passed into the function. -
> - 2 -Scope Chain - consist of references to variables that are located outside of the current function.-
> - 3- this keyword:
>   Execution context is generated right before execution. Arrow functions' execution context doesn't contain this keyword and arguments object.Instead they can use the arguments object ans the this keyword from their closest regular function parent.
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
> <table>

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

- _**What is TDZ (Temporal Dead Zone)?** Every let and const variables get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined. And the variable is only safe to use after the TDZ,_
- _**What is TDZ(Temporal Dead Zone) created for ?** Because makes it easier to avoid and catch errors. Using a variable that is set to undefined before it's actually declared can cause serious bugs which might be hard to find. Accessing variables before declaration is bad practice and should be avoided. Also it makes const variables work the way they are suppose to. We can't reassign const variables. It doesn't let them set it to undefined first and then assign their real value later. Const is only assigned when execution actually reaches the declaration.,_
- _**What is this keyword ?** Special variable that is created for every execution context(for every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used. It is not static, it depends on how the function is called and its value is assigned when the function ia actually called.,_

  >

  > - Method: this || Object that is calling the method
  > - Simple Function Call: this || this = undefined (In strict mode! Otherwise:window (in the browser))
  > - Arrow Functions: this || Don't get own this, this of surrounding function(lexical this)
  > - Event Listener: this || DOM element that the handler is attached to

- _this does not point to the function itself and also not the its variable environment! ,_

- _Javascript variables consist of primitive types(primitive-variables:Number, String, Boolean, Symbol, BıgInt, Null, undefined) and reference types(Objects: Object literal, Arrays, Functions). Primitive Types are stored in execution context in call stack and Reference Types are store in Heap. Heap and Call Stack are components of Javascript Engine. ,_
- _**How do primitive types be stored in Javascript Engine?** First Javascript will create an unique identifier with the variable name. Then a piece of memory will be allocated with a certain address and the value will be stored in memory inside of execution context. The point is that the identifier actually points to the address. The variable equals to memory address specified in the call stack. And the variable is assigned an another variable they point out same memory address in call stack because of variables hold the address of value don't hold variable's value. If there is a change in variable's value then the value is not changed, just a new address is created the variable to hold its new value,_

- _**How do reference types be stored in Javascript Engine?** When a new object is created ,it is stored in the heap. The reference type identifier in call stack doesn't point out to the object's memory address in the heap. it points a new piece of memory address that is created in the call stack and this memory address holds the object's address in the heap.That is the reason why we call object reference types. It works this way because objects might be too large to be stored in the stack. Instead they are stored in the heap which is like an unlimited memory pool. And stack just keeps a reference where the object is stored in the heap. When an object assign a value because of the object holds it's own address in the call stack, They will point out same address in the call stack and they have same value, point out same object. When a change is made on this object, both of them get same result. And these variables can be declarated with const because we don't change their value in the stack, we are changing the object's value in heap.Whenever you think that you are copying an object actually tou are creating a new variable to point out same address so that same object's value in the heap.,_
