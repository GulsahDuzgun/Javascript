### What did I learn while coding this project ?

> #
>
> - _**What is the DOM?** DOM is basically the interface between all Javascript code and the browser. DOM is HTML documents are rendered in and by browser.,_
> - _DOM allows us to make Javascript interact with the browser. We can write Javascript to create, modify and delete HTML elements, set styles, classes and attributes and listen, respond to events.,_
> - _DOM three is genereted from an HTML document, which can interact with. DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree ,_ > _**What is a DOM tree?** DOM tree like structure made out of nodes. In the DOM there are different types of nodes. ,_
> - **How the DOM API is organized behind the scenes ?** Each node is represented in Javascript by an object. This object gets access to special node methods and properties, such as text content, child nodes, parent nodes and many others ,\_
> - _Node type has a couple of child types. These are the element type, the text type, the comment type and also the document type. The Element type has internally an HTML element and that element type itself has exactly one child type that exists in HTML. Like buttons, links, img etc. ,_
> - _There is a special node type called EventTarget which is a parent of both the node type and window node type has addEventListener() method and all nodes type inherits this method ,_ >
>   <br/> >
>   <img src="../ReadME__img/DOM.png"> >
>   <br/>
> - _while querSelectorAll() method returns NodeList, getElementByTagName() and getElementsByClassName() return an HTMLCollection. HTMLCollection is updated automatically.NodeList doesn't update itself automatically ,_

> - _We use textContent and innerHTML to get and set HTML elements properties.,_
> - _insertAdjacentElement(), prepend() and append() methods to insert a DOM element to HTML ,_
> - before() and after() methods in HTML.
> - _remove() and removeChild() methods in Javascript ,_
> - _With style property we can set the value of property as inline css and we can get the value of property if it is declared as inline css rule ,_
> - _document.documentElement.style.setProperty('a','#345654') ,_
> - _getBoundingClientRect() is basically relative with visible view port,_
> - _window.scrollTo() and htmlElement.scrollIntoView({behavior:'smooth'}) ,_
> - _addEventListener and removeEventListener() ,_
> - \_When we trigger an event then this event goes down through the target element just passes its parents element. It is named as capturing phase and when it arrived the target element then event goes up and this is names as bubling phase . In bubling phase parent elements can handle this event too, Actually when parent element catches event can be changed by giving a boolean third argument to event handler functions.

Also e.target point to click elemnent e.currentElement points to this keyword - element was attached to event handler- ,\_

> - DOM Traversing with children, childNodes, firstElementChild, lastElementChild, parentElement, parentNode, previousElementSibling, nextElementSibling properties and closest() method.
> - _The Intersection Observer API ,_
> - _How to implement lazy Loading strategy with The Intersection API in Javascript ,_
>
> #
