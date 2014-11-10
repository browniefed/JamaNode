var Filters = function(_super) {
    this._super = _super;
    this._baseMethod = 'filters';
}

Filters.prototype.get = function(fitlerId) {
    var path = this._super.buildPath(this._baseMethod);
    if (filterId) {
        path = this._super.buildPath(this._baseMethod, filterId);
    }

    return this._super.get(path);
}

Filter.prototype.results = function(fitlerId) {
    return this._super.get(this._super.buildPath(this._baseMethod, filterId, 'results'));
}

module.exports = Filters;