var Realtionships = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionships';
}

Realtionships.prototype.get = function() {
    return this._super.get(this._super.buildPath(this._baseMethod));
}

module.exports = Realtionships;