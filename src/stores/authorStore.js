"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmmiter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var authors = [];

var AuthorStore = assign({}, EventEmmiter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange: function(callback){
        this.emit(CHANGE_EVENT);
    },
    getAllAuthors: function(){
        return authors;
    },
    getAuthorById: function(id){
        return _.find(authors, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(authors, { id: action.author.id });
            var existingAuthorIndex = _.indexOf(authors, existingAuthor);
            authors.splice(existingAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(authors, function(author){
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
    }
});

module.exports = AuthorStore;