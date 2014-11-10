var Picklists = function(_super) {
    this._super = _super;
    this._baseMethod = 'picklists';
}

Picklists.prototype.get = function(picklistId) {
    var path = this._super.buildPath(this._baseMethod);
    if (picklistId) {
        path = this._super.buildPath(this._baseMethod, picklistId);
    }

    return this._super.get(path);
}

Picklists.prototype.options = function(picklistId) {
    return this._super.get(this._super.buildPath(this._baseMethod, picklistId, 'options'));
}

module.exports = Picklists;