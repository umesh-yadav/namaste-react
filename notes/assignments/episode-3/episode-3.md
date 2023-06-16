# Topics

# What is JSX?
JSX is HTML like or XML like syntax but not html/xml. JSX allows us to write HTML elements inside JS and place them in DOM without any createElement() and/or appendChild() methods. JSX converts html tags in react elements. and React elements at the end are JS objects.

e.g. using JSX

const myEle = <h1> hi there </h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myEle);

e.g. using React.createElements

const myEle = React.createElement("h1", {id:"name"},"Hi There!!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myEle);


# Superpowers of JSX
USing JSX you can write html inside JS. It provides a superpower to write login and markup of a component in a single .js file. It is easy to maintain and debug.

function getName(name){
    return <h1> Your name is {name} </h1>;
}

# Role of type attribute in script tag? What options can I use there?
type attribute define the type of script in <script></script> tag. it has default value which is "text/javascript".

other types of type attribute :
text/javascript -- It is the basic standard of writing javascript code inside the <script> tag.
text/ecmascript -- this value indicates that the script is following the EcmaScript standards.
module -- This value tells the browser that the script is a module that can import or export other files or modules inside it.
text/babel -- This value indicates that the script is a babel type and required bable to transpile it.
text/typescript -- As the name suggest the script is written in TypeScript.

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

{TitleComponent} -- it means that you are evaluating variable TitleComponent using JS expression {}.
{<TitleComponent/>} -- this is a component which basically return some JSX or you can say a function which return a JSX value. This component is written inside { < />} express.
{<TitleComponent></TitleComponent>} -- this is same as {<TitleComponent/>} , apart from if there is no child component using inside TitleComponent.

<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>


