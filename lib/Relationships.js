var Relationships = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionships';
}

Relationships.prototype.get = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod);

    if (relationshipId) {
        path = this._super.buildPath(this._baseMethod, relationshipId);
    }

    return this._super.get(path, data);
}

Relationships.prototype.post = Relationships.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);

    return this._super.post(path, data);
}

Relationships.prototype.put = Relationships.prototype.update = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.put(path, data);
}

Relationships.prototype.del = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.del(path);
}

Relationships.prototype.deleteSuspect = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId, 'suspect');
        
    return this._super.del(path);
}

module.exports = Relationships;