"use strict";

// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
var title = "Indecision App";
var subTitle = "This is some information";
var listItems = ["Item one", "Item two"];
var todos = 6;

// function getTitle(title) {
//     if (title) {
//         return <h1>{title}</h1>;
//     }
// }


// let template = (
//     <div>
//         {getTitle(title)}
//         <p>{subTitle}</p>
//         {subTitle ? 'subTitle exists' : 'I dont exist'}
//         <ol>
//             <li>{listItems[0]}</li>
//             <li>{listItems[1]}</li>
//         </ol>
//         {(todos && todos >= 6) && <p>You are too young</p>}
//     </div>
// );

var count = 0;

var addOne = function addOne() {
    //count = 21;
    console.log("addOne");
};

//challange time
var minusOne = function minusOne() {
    console.log("minusOne");
};

var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "reset"
    )
);
console.log(templateTwo);

// const templateThree = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={minusOne}>-1</button>
//     </div>
// );
// console.log(templateThree);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
