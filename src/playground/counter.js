// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
let title = "Indecision App";
let subTitle = "This is some information";
let listItems = ["Item one", "Item two"];
let todos = 6;
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

//challange time
const minusOne = () => {
    count -= 1;
    renderCounterApp();
};

const reset = () => {
    count = 0
    renderCounterApp();
};

let appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();