import React from "react";
import ReactDOM  from "react-dom/client";

// /* Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title") */
// const header = React.createElement("div",{className:"title"}, 
// [React.createElement("h1",{},"H1 inside div" ),
// React.createElement("h2",{},"H2 inside div" ),
// React.createElement("h3",{},"H3 inside div" )
// ]
// );

// /* Create the same element using JSX */
// const header = (
//     <div className="title">
//             <h1>H1 inside div</h1>
//             <h2>H2 inside div</h2>
//             <h3>H3 inside div</h3>
//     </div>
// );

// /*Create a functional component of the same with JSX */

// const Header = ()=>{
//     return (
//         <div className="title">
//             <h1>H1 inside div</h1>
//             <h2>H2 inside div</h2>
//             <h3>H3 inside div</h3>
//     </div>
//     );
// }

// /** Pass attribute into the tag in JSX */

// const Header = ()=>{
//     return (
//         <div className="title">
//             <h1 id="h1">H1 inside div</h1>
//             <h2 id="h2">H2 inside div</h2>
//             <h3 id="h3">H3 inside div</h3>
//     </div>
//     );
// }

// /** Composition of Component (Add a component inside another) */

// const Header2 = ()=>{
//     return (<div id="header2">
//         <Header /> 
//     </div>)
// }

// /** `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX. */

// const TitleComponent = <h2>This is TitleComponent </h2>;  //This is react Element or JSX element;

// const TitleComponent= ()=>{
//     return <div>Hi from React functional component</div>
// } // This is React Component 

// const Header3 = () =>{
//     return(
//         <div>
//             {TitleComponent}
//             <TitleComponent />
//             <TitleComponent> </TitleComponent>
//         </div>
//     );
// }

// /** Q: Create a Header Component from scratch using Functional Component with JSX
// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice
// */ 

const Header4 = ()=> {
    const logo="https://www.designmantic.com/logo-images/171406.png?company=Apna+Bhojan&slogan=&verify=1";
    return (
        <div className="header">
            <div className="left">
                <img src={logo} alt="Logo" c/>
            </div>
            <div className="middle">
                <input type="text" placeholder="search" className="input"/>
                <button type="submit">Search</button>
            </div>
            <div className="right">
                <img src={logo} alt="User Logo"/>
            </div>
        /</div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header4/>);