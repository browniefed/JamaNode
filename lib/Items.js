var Items = function(_super) {
    this._super = _super;
    this._baseMethod = 'items';
}

Items.prototype.get = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId);
    return this._super.get(path);
}

module.exports = Items;