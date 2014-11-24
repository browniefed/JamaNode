var sprintf = require("sprintf-js").sprintf
    _ = require('lodash'),
    request = require('superagent'),    
    Projects = require('./lib/Projects'),
    Itemtypes = require('./lib/Itemtypes'),
    Filters = require('./lib/Filters'),
    Picklists = require('./lib/Picklists'),
    PicklistOptions = require('./lib/PicklistOptions'),
    RelationshipTypes = require('./lib/RelationshipTypes'),
    Releases = require('./lib/Releases'),
    Comments = require('./lib/Comments'),
    Activities = require('./lib/Activities'),
    Users = require('./lib/Users');

var API = function(apiInfo) {
    this._baseUrl = apiInfo.restURL;
    this.authenticate(apiInfo.username, apiInfo.password);
    this.projects = new Projects(this);
    this.itemtypes = new Itemtypes(false, this);
    this.filters = new Filters(this);
    this.picklists = new Picklists(this);
    this.picklistoptions = new PicklistOptions(this);
    this.realtionshiptypes = new RelationshipTypes(this);
    this.releases = new Releases(this);
    this.comments = new Comments(this);
    this.activities = new Activities(this);
    this.users = new Users(this);
};

API.prototype.getBaseUrl = function() {
    return this._baseUrl || '';
}

API.prototype.authenticate = function(restUrl, username, password) {
    this._baseUrl = restUrl;
    this.username = username;
    this.password = password;
}

API.prototype.callServer = function(method, path) {
    return request[method](this.getBaseUrl() + '/' + path).auth(this.username, this.password);
}
API.prototype.get = function(path) {
    return this.callServer('get', path);
}

API.prototype.post = function(path) {
    return this.callServer('post', path);
}

API.prototype.put = function(path) {
    return this.callServer('put', path);
} 

API.prototype.del = function(path) {
    return this.callServer('delete', path);
}
API.prototype.mergePath = function() {
    return Array.prototype.slice.call(arguments).join('/');
}

API.prototype.buildNamePath = function(path, args) {
    return sprintf(path, args);
}

API.prototype.buildPath = function() {
    var addPath = Array.prototype.slice.call(arguments).join('/');
    return addPath;
}
// API.prototype.views = {};
// API.prototype.relationshiprulesets = {};
// API.prototype.itemtypes = {};
// API.prototype.attachements = {};
// API.prototype.items = {};
// API.prototype.testplans = {};
// API.prototype.testcycles = {};
// API.prototype.testruns = {};
// API.prototype.filters = {};
// API.prototype.picklists = {};
// API.prototype.piclistoptions = {};
// API.prototype.relationships = {};
// API.prototype.relationshiptypes = {};
// API.prototype.users = {};
// API.prototype.releases = {};
// API.prototype.comments = {};
// API.prototype.activities = {};
// API.prototype.reuse = {};
// API.prototype.integrations = {};

module.exports = API;