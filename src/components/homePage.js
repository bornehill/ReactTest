"use strict";

var React = require("react");

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>React test administrator</h1>
                <p>React, React router & Flux for responsive apps.</p>
            </div>
        );
    }
});

module.exports = Home;