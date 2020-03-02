// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
let title = "Indecision App";
let subTitle = "This is some information";
let listItems = ["Item one", "Item two"];
let todos = 6;

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

let count = 0;

const addOne = () => {
    //count = 21;
    console.log("addOne")
};

//challange time
const minusOne = () => {
    console.log("minusOne")
};

const reset = () => {
    console.log("reset")
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>

    </div>
);
console.log(templateTwo);

// const templateThree = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={minusOne}>-1</button>
//     </div>
// );
// console.log(templateThree);

let appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

