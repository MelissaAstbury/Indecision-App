// console.log("app.js is running");

//JSX - Jacascript XML. This is a language extension of Javascript
const app = {
    title: "Indecision App",
    subTitle: "This is some information",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};

let appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" placeholder="Enter Here" />
                <button>Add Option</button>
            </form>
        </div>
    );


    ReactDOM.render(template, appRoot);
};
renderApp();