var Itemtypes = require('./Itemtypes'),
    Tags = require('./Tags');

/**
 * Get projects and related project information
 * @mixin
 * @mixes Tags
 * @mixes Itemtypes
 */
var Projects = function(_super) {
    this._super = _super;
    this._baseMethod = 'projects';

    this.tags = new Tags(this._baseMethod, this._super);
    this.itemtypes = new Itemtypes(this._baseMethod, this._super);
};

Projects.prototype.get = function(projectId) {
    var path = this._super.buildPath(this._baseMethod);
    if (projectId) {
        path = this._super.buildPath(this._baseMethod, projectId);
    }            
    return this._super.get(path);
};

Projects.prototype.uploadAttachment = function(projectId, data) {
    var path = this._super.buildPath(this._baseMethod, projectId, 'attachments');
    return this._super.post(path, data);
}


module.exports = Projects;