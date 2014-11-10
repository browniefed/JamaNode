var Releases = function(_super) {
    this._super = _super;
    this._baseMethod = 'releases';
}

Releases.prototype.get = function(releaseId) {
    var path = this._super.buildPath(this._baseMethod);
    if (releaseId) {
        path = this._super.buildPath(this._baseMethod, releaseId);
    }

    return this._super.get(path);
}

module.exports = Releases;