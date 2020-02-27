"use strict";

console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript

var template = React.createElement(
  "p",
  null,
  "This is JSX from app.js!"
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
