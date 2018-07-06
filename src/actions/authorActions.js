"use strict";

var Dispacher = require('../dispatcher/appDispatcher');
var AuthorAPI = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorAPI.saveAuthor(author);

        Dispacher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: function(author){
        var updateAuthor = AuthorAPI.saveAuthor(author);

        Dispacher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updateAuthor
        });
    },
    deleteAuthor: function(id){
        AuthorAPI.deleteAuthor(id);

        Dispacher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }        
};

module.exports = AuthorActions;