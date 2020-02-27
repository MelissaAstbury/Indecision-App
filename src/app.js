// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
let title = "Indecision App";
let subTitle = "This is some information";
let listItems = ["Item one", "Item two"];
let todos = 6;

function getTitle(title) {
    if (title) {
        return <h1>{title}</h1>;
    }
}


let template = (
    <div>
        {getTitle(title)}
        <p>{subTitle}</p>
        {subTitle ? 'subTitle exists' : 'I dont exist'}
        <ol>
            <li>{listItems[0]}</li>
            <li>{listItems[1]}</li>
        </ol>
        {(todos && todos >= 6) && <p>You are too young</p>}
    </div>
);


let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);