/**
 * Jama Abstract items
 * @mixin
 */
var AbstractItems = function(_super) {
    this._super = _super;
    this._baseMethod = 'abstractitems';
}
/**
 * Get an abstract item
 * @param  {Number} itemId
 * @return {Request}
 * @example
 * JamaApi.abstractitems.get(100).end(function(err, res) {
 *     console.log(res.body);
 * })
 */
AbstractItems.prototype.get = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId);
    return this._super.get(path);
}

module.exports = AbstractItems;