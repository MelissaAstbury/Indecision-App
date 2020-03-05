"use strict";

// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
var app = {
    title: "Indecision App",
    subTitle: "This is some information",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
};

var appRoot = document.getElementById("app");

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            "p",
            null,
            app.subTitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        React.createElement(
            "button",
            { disabled: app.options.lenght === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number: ",
                number
            );
        }),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option", placeholder: "Enter Here" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
renderApp();
