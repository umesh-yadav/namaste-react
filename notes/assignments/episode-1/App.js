

     /** using JS */
     
        const heading1 = document.createElement("h2");
        heading1.innerHTML = " I am h2";
        const heading2 = document.createElement("h2");
        heading2.innerHTML = " I am h3";
        const heading3 = document.createElement("h4");
        heading3.innerHTML = " I am h4";


        const root1 = document.getElementById("root1");
        root1.appendChild(heading1);
        root1.appendChild(heading2);
        heading2.appendChild(heading3);


        /**using React  For single element */

        const heading4 = React.createElement("h1",{},"Hi there");

        const root2 = ReactDOM.createRoot(document.getElementById("root2"));
        
        root2.render(heading4);




/**using React  For nested element */

            const heading5 = React.createElement("div",{id:"parent"}, 
                [React.createElement("div",{id:"child"},
                    [React.createElement("h1",{id:"h1"}, "I am h1 ❤👀👀"),
                     React.createElement("h2",{id:"h2"}, "I am h2")
                    ]),
                    React.createElement("div",{id:"child2"},
                    [React.createElement("h1",{id:"h1"}, "I am h1"),
                    React.createElement("h2",{id:"h2"}, "I am h2")
                    ]
                )]);
            const root3 = ReactDOM.createRoot(document.getElementById("root3"));

            root3.render(heading5);