var config = require('./config'),
    sprintf = require("sprintf-js").sprintf
    _ = require('lodash'),
    Promise = require('bluebird'),
    request = Promise.promisify(require("request"));    
    Projects = require('./lib/Projects'),
    Itemtypes = require('./lib/Itemtypes'),
    Filters = require('./lib/Filters'),
    Picklists = require('./lib/Picklists'),
    PicklistOptions = require('./lib/PicklistOptions'),
    RelationshipTypes = require('./lib/RelationshipTypes'),
    Releases = require('./lib/Releases'),
    Comments = require('./lib/Comments'),
    Activities = require('./lib/Activities');

var API = function(username, password) {
    this.authenticate(username, password);
    this.projects = new Projects(this);
    this.itemtypes = new Itemtypes(false, this);
    this.filters = new Filters(this);
    this.picklists = new Picklists(this);
    this.picklistoptions = new PicklistOptions(this);
    this.realtionshiptypes = new RelationshipTypes(this);
    this.releases = new Releases(this);
    this.comments = new Comments(this);
    this.activities = new Activities(this);
};

API.prototype.authenticate = function(username, password) {
    this.authHash = new Buffer(username + ':' + password).toString('base64');
}

API.prototype.callServer = function(method, path) {
    return request({
        url: path,
        method: method,
        headers: {
            'Authorization': 'Basic ' + this.authHash
        }
    });
}
API.prototype.get = function(path) {
    return this.callServer('GET', path);
}

API.prototype.post = function(path) {
    return this.callServer('POST', path);
}

API.prototype.put = function(path) {
    return this.callServer('PUT', path);
} 

API.prototype.del = function(path) {
    return this.callServer('DELETE', path);
}
API.prototype.mergePath = function() {
    return Array.prototype.slice.call(arguments).join('/');
}

API.prototype.buildNamePath = function(path, args) {
    return sprintf(path, args);
}

API.prototype.buildPath = function() {
    var addPath = Array.prototype.slice.call(arguments).join('/');
    return config.path + addPath;
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