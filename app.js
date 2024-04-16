const heading = React.createElement("div", {},
    [
        React.createElement("div", { id: "atrr" },
            [
                React.createElement("h1", {}, "Hello world"),
                React.createElement("h2", {}, "Hello baby")
            ]
        ),
        React.createElement("div", { id: "atrr2" },
            [
                React.createElement("h1", {}, "Hello world"),
                React.createElement("h2", {}, "Hello baby")
            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById('kyabe'));

root.render(heading);