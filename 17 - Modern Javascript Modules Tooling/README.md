### What did I learn while coding this project ?

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
  >
  > #
