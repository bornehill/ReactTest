"use strict";

var React = require("react");

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(!confirm('Are you want to continue?')){
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component){
            if(!confirm('Are you want to leave?')){
                transition.abort();
            }
        }        
    },
    render: function() {
        return (
            <div className="jumbotron">
                <h1>About</h1>
                <p>This app uses the folowing technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;