"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthoApi = require('../../api/authorApi');
var Router = require('react-router');
var toastr = require('toastr');

var ManagerAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },
    saveAuthor: function(event){
        event.preventDefault();
        AuthoApi.saveAuthor(this.state.author);
        toastr.success('Author saved');
        this.transitionTo('authors');
    },
    render: function() {
        return (
            <AuthorForm author={ this.state.author }
                onChange={ this.setAuthorState }
                onSave={ this.saveAuthor }/>
        );
    }
});

module.exports = ManagerAuthorPage;