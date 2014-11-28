var Views = function(_super) {
    this._super = _super;
    this._baseMethod = 'views';
}

Views.prototype.get = function(layoutType, data) {
    var path = this._super.buildPath(this._baseMethod, layoutType);
    return this._super.get(path, data);
}

module.exports = Views;