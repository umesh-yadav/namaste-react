# Episode - 3 Laying the foundation

To start your app using npm run start or npm run build. We need to change in package.json under scripts tag.

"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },


# What is JSX?

JSX is HTML-like or XML-like syntax inside react
const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>

# Do your JS engine or browser understand JSX?
No ,jsx is not understood by js engine or browser. Because its not pure JS. Before going to browser, JSX code is transpiled to pure JS (Parcel --> Babel (transpiler))

# JSX => Babel transpiles to React.createElement => ReactElement-JS Object => HTMLElement(render)

# React Component

## Class Component - OLD way



## Functional Component - NEW way - it just a normal js function which return JSX or react element 
const HeadingComponent = () =>{
  return <h1>From functional component </h1>;
}

# Component composition 
react component inside another component known as component composition.
<Heading>
  <Title/>
</Heading>

# JSX  - to run any js code in side a react functional componentu using {}, JSX escape the malicious code . It sanitize the code.

# React Fragment 
its like a empty tag, which will not shown in browser elements
<> </>
<React.Fragment></React.Fragment>