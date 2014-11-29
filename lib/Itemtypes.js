var Itemtypes = function(_superMethod, _super) {
    this._superMethod = _superMethod;
    this._super = _super;
    this._baseMethod = 'itemtypes';
    if (!_superMethod) {
        this._superMethod = this._baseMethod;
        this._baseMethod = '';
    }
}

Itemtypes.prototype.get = function(superId, data) {
    var path = this._super.buildPath(this._superMethod);
    if (superId) {
        path = this._super.buildPath(this._superMethod, superId, this._baseMethod);
    }

    return this._super.get(path, data);
}

module.exports = Itemtypes;