/**
 * Get scoped user configured views
 * @mixin
 */
var Views = function(_super) {
    this._super = _super;
    this._baseMethod = 'views';
}
/**
 * get an array of item types for that scoped view
 * @param  {String} layoutType
 * @param  {Object} data
 * @return {Request}
 */
Views.prototype.get = function(layoutType, data) {
    var path = this._super.buildPath(this._baseMethod, layoutType);
    return this._super.get(path, data);
}

module.exports = Views;