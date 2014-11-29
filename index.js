var sprintf = require("sprintf-js").sprintf
    request = require('superagent'), 
    Views = require('./lib/Views'),   
    RelationshipRulesets = require('./lib/RelationshipRulesets'),
    Projects = require('./lib/Projects'),
    Itemtypes = require('./lib/Itemtypes'),
    AbstractItems = require('./lib/AbstractItems'),
    Items = require('./lib/Items'),
    TestPlans = require('./lib/TestPlans'),
    TestCycles = require('./lib/TestCycles'),
    TestRuns = require('./lib/TestRuns'),
    Attachments = require('./lib/Attachments'),
    Filters = require('./lib/Filters'),
    Picklists = require('./lib/Picklists'),
    PicklistOptions = require('./lib/PicklistOptions'),
    Relationships = require('./lib/Relationships'),
    RelationshipTypes = require('./lib/RelationshipTypes'),
    Users = require('./lib/Users'),
    Releases = require('./lib/Releases'),
    Comments = require('./lib/Comments'),
    Activities = require('./lib/Activities'),
    Reuse = require('./lib/Reuse'),
    Integrations = require('./lib/Integrations');

/**
 * JamaAPI
 * @constructor
 * @param {Object} apiInfo Pass in restURL, username, password to authenticate
 * @param {string} apiInfo.restURL The restURl to your api
 * @param {string} apiInfo.username The username of the user to authenticate with
 * @param {string} apiInfo.password The password of the user to authenticate with
 * @mixes Views
 * @mixes RelationshipRulesets
 * @mixes Projects
 * @mixes ItemTypes
 * @mixes AbstractItems
 * @mixes Items
 * @mixes TestPlans
 * @mixes TestCycles
 * @mixes TestRuns
 * @mixes Attachments
 * @mixes Filters
 * @mixes Picklists
 * @mixes PicklistOptions
 * @mixes Relationships
 * @mixes RelationshipTypes
 * @mixes Users
 * @mixes Releases
 * @mixes Comments
 * @mixes Activities
 * @mixes Reuse
 * @mixes Integrations
 *
 * @description All end points export a raw, incomplete request from superagent. This allows you to add in additional data/headers/etc to the request. You must call .end to make the request
 */
var API = function(apiInfo) {
    this._baseUrl = apiInfo.restURL;
    this.authenticate(apiInfo.restURL, apiInfo.username, apiInfo.password);

    this.views = new Views(this);
    this.relationshiprulesets = new RelationshipRulesets(this);
    this.projects = new Projects(this);
    this.itemtypes = new Itemtypes(false, this);
    this.abstractitems = new AbstractItems(this);
    this.items = new Items(this);
    this.testplans = new TestPlans(this);
    this.testcycles = new TestCycles(this);
    this.testruns = new TestRuns(this);
    this.attachements = new Attachments(false, this);
    this.filters = new Filters(this);
    this.picklists = new Picklists(this);
    this.picklistoptions = new PicklistOptions(this);
    this.relationships = new Relationships(this);
    this.realtionshiptypes = new RelationshipTypes(this);
    this.users = new Users(this);
    this.releases = new Releases(this);
    this.comments = new Comments(this);
    this.activities = new Activities(this);
    this.reuse = new Reuse(this);
    this.integrations = new Integrations(this);
};

API.prototype.getBaseUrl = function() {
    return this._baseUrl || '';
}
/**
 * Authenticate the JamaAPI for a new user/restURL
 * @param  {string} restUrl
 * @param  {string} username
 * @param  {string} password
 */
API.prototype.authenticate = function(restUrl, username, password) {
    this._baseUrl = restUrl;
    this.username = username;
    this.password = password;
}

API.prototype.callServer = function(method, path, data) {
    return request[method](this.getBaseUrl() + '/' + path).auth(this.username, this.password).send(data || {});
}
API.prototype.get = function(path, data) {
    return this.callServer('get', path, data);
}

API.prototype.post = function(path, data, query) {
    return this.callServer('post', path, data).query(query|| {});
}

API.prototype.put = function(path, data) {
    return this.callServer('put', path, data);
} 

API.prototype.del = function(path, data) {
    return this.callServer('delete', path, data);
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

module.exports = API;