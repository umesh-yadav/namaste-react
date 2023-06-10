import React  from "react";
import  ReactDOM  from "react-dom/client";


const heading = React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"h1"}, "I am h1 ❤👀👀"),
React.createElement("h2",{id:"h2"}, "I am h2")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1"}, "I am h1"),
React.createElement("h2",{id:"h2"}, "I am h2")
]
)]);
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(heading);