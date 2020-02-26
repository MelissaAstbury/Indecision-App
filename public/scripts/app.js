console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript

//let template = <p>This is JSX from app.js!</p>
//My brower does not understand line 5. See below the alternative code:

var template = React.createElement("p", null, "This is JSX from app.js");
let appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);