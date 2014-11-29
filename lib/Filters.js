/**
 * get filters and results of pre-defined filters
 * @mixin
 */
var Filters = function(_super) {
    this._super = _super;
    this._baseMethod = 'filters';
}
/**
 * Get a list of filters or a filter
 * @param  {Number|Object|undefined} fitlerId
 * @param  {Object} data
 * @return {Request}
 */
Filters.prototype.get = function(fitlerId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (filterId) {
        path = this._super.buildPath(this._baseMethod, filterId);
    } else {
        data = filterId;
    }

    return this._super.get(path, data);
}
/**
 * Get the results of a filter
 * @param  {Number} fitlerId
 * @param  {Object} data
 * @return {Request}
 */
Filters.prototype.results = function(fitlerId, data) {
    var path = this._super.buildPath(this._baseMethod, filterId, 'results');
    return this._super.get(path, data);
}

module.exports = Filters;