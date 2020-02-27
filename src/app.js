console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript

let template = <p>This is JSX from app.js!</p>

let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);