var RelationshipTypes = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionshiptypes';
}

RelationshipTypes.prototype.get = function(relationshipTypeId) {
    var path = this._super.buildPath(this._baseMethod);
    if (relationshipTypeId) {
        path = this._super.buildPath(this._baseMethod, relationshipTypeId);
    }
    return this._super.get(path);
}

module.exports = RelationshipTypes;