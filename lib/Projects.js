var Attachments = require('./Attachments'),
    Itemtypes = require('./Itemtypes'),
    Tags = require('./Tags');

var Projects = function(_super) {
    this._super = _super;
    this._baseMethod = 'projects';

    this.tags = new Tags(this._baseMethod, this._super);
    this.itemtypes = new Itemtypes(this._baseMethod, this._super);
    this.attachements = new Attachments(this._baseMethod, this._super);

};

Projects.prototype.get = function(projectId) {
    var path = this._super.buildPath(this._baseMethod);
    if (projectId) {
        path = this._super.buildPath(this._baseMethod, projectId);
    }            
    return this._super.get(path);
};


module.exports = Projects;