var Attachments = function(_superMethod, _super) {
    this._superMethod = _superMethod;
    this._super = _super;
    this._baseMethod = 'attachements';
}

Attachments.prototype.get = function(superId) {
    var path = this._super.buildPath(this._superMethod, superId, this._baseMethod)
    return this._super.get(path);
}

module.exports = Attachments;