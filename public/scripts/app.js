"use strict";

// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
var title = "Indecision App";
var subTitle = "This is some information";
var listItems = ["Item one", "Item two"];
var todos = 6;

function getTitle(title) {
    if (title) {
        return React.createElement(
            "h1",
            null,
            title
        );
    }
}

var template = React.createElement(
    "div",
    null,
    getTitle(title),
    React.createElement(
        "p",
        null,
        subTitle
    ),
    subTitle ? 'subTitle exists' : 'I dont exist',
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            listItems[0]
        ),
        React.createElement(
            "li",
            null,
            listItems[1]
        )
    ),
    todos && todos >= 6 && React.createElement(
        "p",
        null,
        "You are too young"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
