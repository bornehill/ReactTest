"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <Input
                    name="firstName"
                    label="First Name"
                    ref="firstName"
                    onChange={ this.props.onChange }
                    value={ this.props.author.firstName } />
                <Input 
                    name="lastName"
                    label="Last Name"
                    ref="lastName"
                    onChange={ this.props.onChange }
                    value={ this.props.author.lastName } />
                <input type="submit"
                    name="firstName"
                    className="btn btn-default"
                    value="Save" 
                    onClick={ this.props.onSave }/>                     
            </form>
        );
    }
});

module.exports = AuthorForm;