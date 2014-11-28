var Reuse = function(_super) {
    this._super = _super;
    this._baseMethod = 'reuse';
}

Reuse.prototype.get = function() {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.get(path);
}

module.exports = Reuse;