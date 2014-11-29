/**
 * Manager relationships and suspect links between items
 * @mixin
 */
var Relationships = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionships';
}
/**
 * get a list of relationships or a specific relationship
 * @param  {Number|Object|undefined} relationshipId
 * @param  {Object} data
 * @return {Request}
 */
Relationships.prototype.get = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod);

    if (relationshipId) {
        path = this._super.buildPath(this._baseMethod, relationshipId);
    }

    return this._super.get(path, data);
}
/**
 * Create a relationship
 * @param  {Object} data
 * @return {Request}
 */
Relationships.prototype.post = Relationships.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);

    return this._super.post(path, data);
}
/**
 * Update a relationship
 * @param  {Number} relationshipId
 * @param  {Object} data
 * @return {Request}
 */
Relationships.prototype.put = Relationships.prototype.update = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.put(path, data);
}
/** 
 * Delete a relationship
 * @param  {Number} relationshipId
 * @return {Request}
 */
Relationships.prototype.del = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.del(path);
}
/** 
 * Delete a suspect relationship
 * @param  {Number} relationshipId
 * @return {Request}
 */
Relationships.prototype.deleteSuspect = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId, 'suspect');
        
    return this._super.del(path);
}

module.exports = Relationships;