var Realtionships = function(_super) {
    this._super = _super;
    this._baseMethod = 'realtionships';
}

Realtionships.prototype.get = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod);

    if (relationshipId) {
        path = this._super.buildPath(this._baseMethod, relationshipId);
    }

    return this._super.get(path, data);
}

Realtionships.prototype.post = Realtionships.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);

    return this._super.post(path, data);
}

Realtionships.prototype.put = Relatationships.prototype.update = function(relationshipId, data) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.put(path, data);
}

Realtionships.prototype.del = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId);
        
    return this._super.del(path);
}

Realtionships.prototype.deleteSuspect = function(relationshipId) {
    var path = this._super.buildPath(this._baseMethod, relationshipId, 'suspect');
        
    return this._super.del(path);
}

module.exports = Realtionships;