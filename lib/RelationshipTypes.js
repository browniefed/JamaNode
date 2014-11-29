/**
 * Get types of relationships
 * @mixin
 */
var RelationshipTypes = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionshiptypes';
}
/** 
 * Get a list of relationship types or specific relationship type
 * @param  {Number|undefined} relationshipTypeId
 * @return {Request}
 */
RelationshipTypes.prototype.get = function(relationshipTypeId) {
    var path = this._super.buildPath(this._baseMethod);
    if (relationshipTypeId) {
        path = this._super.buildPath(this._baseMethod, relationshipTypeId);
    }
    return this._super.get(path);
}

module.exports = RelationshipTypes;