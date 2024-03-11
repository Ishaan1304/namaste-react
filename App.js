/*

<div id="parent">
    <div id="child1">
        <h1>I am H1 Tag</h1>
        <h2>I am H1 Tag</h2>
    </div>
    <div id="child2">
        <h1>I am H1 Tag</h1>
        <h2>I am H1 Tag</h2>
    </div>
</div>

ReacElement (Object)=> converted into (HTML that browser understands)

*/

const parent=React.createElement("div",{id: "parent"},
    [
        React.createElement("div",{id: "child1"},
            [React.createElement("h1",{},"I am H1 tag"),
            React.createElement("h2",{},"I am H2 tag")]),
        React.createElement("div",{id: "child2"},
            [React.createElement("h1",{},"I am H1 tag"),
            React.createElement("h2",{},"I am H2 tag")])
    ]
    
);

console.log(parent);

/*
const heading=React.createElement(
    "h1",
    {id: "heading",xyz: "abc"},
    "Hello World from React!"
);

console.log(heading); //object milega or we can say react element
*/
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render method connvert object to h1 tag and put it in root
