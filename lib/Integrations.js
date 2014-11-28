var Integrations = function(_super) {
    this._super = _super;
    this._baseMethod = 'integrations';
}

Integrations.prototype.get = function(integrationName, mappingId) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings');
    if (mappingId) {
        path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    }
    return this._super.get(path);
}

Integrations.prototype.post = Integrations.prototype.create = function(integrationName, data) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings');

    return this._super.post(path, data);
}

Integrations.prototype.put = Integrations.prototype.update = function(integrationName, mappingId, data) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    return this._super.put(path, data);
}

Integrations.prototype.del = function(integrationName, mappingId) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    return this._super.del(path);
}

module.exports = Integrations;