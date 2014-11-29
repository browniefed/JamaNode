/**
 * Reuse items
 * @param {[type]} _super
 */
var Reuse = function(_super) {
    this._super = _super;
    this._baseMethod = 'reuse';
}
/**
 * Get a list of rules or a specific rule for reuse
 * @param  {Number|undefined} ruleId
 * @return {Request}
 */
Reuse.prototype.rules = function(ruleId) {
    var path = this._super.buildPath(this._baseMethod, 'rules');
    if (ruleId) {
        path = this._super.buildPath(this._baseMethod, 'rules', rulesId);
    }
    return this._super.get(path);
}
/** 
 * Get valid item type for a rule
 * @param  {Number} ruleId
 * @return {Request}
 */
Reuse.prototype.validItemtypes = function(ruleId) {
    var path = this._super.buildPath(this._baseMethod, 'validItemtypes');
    if (ruleId) {
        this._super.buildPath(this._baseMethod, 'rules', ruleId, 'validItemtypes');
    }
    return this._super.get(path);
}
/**
 * Execute reuse
 * @param  {Object} data
 * @return {Request}
 */
Reuse.prototype.post = Reuse.prototype.reuse = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}
/**
 * Sync items that are out of sync
 * @param  {Object} data
 * @return {Request}
 */
Reuse.prototype.sync = function(data) {
    var path = this._super.buildPath(this._baseMethod, 'sync');
    return this._super.post(path, data);
}
module.exports = Reuse;