const heading = React.createElement("div",{id:"parent"}, 
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"h1"}, "I am h1"),
React.createElement("h2",{id:"h2"}, "I am h2")
]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{id:"h1"}, "I am h1"),
React.createElement("h2",{id:"h2"}, "I am h2")
]
)]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
// console.log(root);

let result="";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        
        result+=e.target.innerHTML;
        
        console.log(result);
    })
})

console.log(eval(result))



root.render(heading);