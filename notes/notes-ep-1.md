# Episode 1

how to create hello world with different ways
1-- using normal html
 <div id="root">
    <h1>Hello world </h1>
    </div>
2-- using javascript

        <div id="root"> </div>
        <script>
        const heading1 = document.createElement("h2");
         heading1.innerHTML = " I am h2";
         const heading2 = document.createElement("h2");
         heading2.innerHTML = " I am h3";
         const heading3 = document.createElement("h4");
         heading3.innerHTML = " I am h4";


         const root1 = document.getElementById("root");
         root1.appendChild(heading1);
         root1.appendChild(heading2);
         heading2.appendChild(heading3);
    </script>


3-- using React

 <div id="root"> </div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

        <script>
        const heading = React.createElement("h3",{},"data of element");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        </script>


*Note -- React.createElement will always return an object (i.e. heading here). and Render method will parse that object and show up on screen.
**  Order of library files matters in code.
**  ReactJs is a JS library not a framework. So, we can use ReactJs anywhere in our JS Code.
** the render method will only render the root element where it is placed in html tag. The above and below html code will run as it is.

<h1>Hi there,I am header</h1>
<div id="root"> </div>
<h2>I am footer</h2>

above h1 and h2 will print as it is when code runs, but div will re-render as per ReactCode requirement and it will replace all code instead this div.



