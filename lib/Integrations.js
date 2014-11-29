/**
 * Manager integrations
 * @mixin
 */
var Integrations = function(_super) {
    this._super = _super;
    this._baseMethod = 'integrations';
}
/**
 * Get a list of mapped integrations or a specifc mapped integration
 * @param  {String} integrationName
 * @param  {Number} mappingId
 * @return {Request}
 */
Integrations.prototype.get = function(integrationName, mappingId) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings');
    if (mappingId) {
        path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    }
    return this._super.get(path);
}
/** 
 * Create a new integration mapping
 * @param  {String} integrationName
 * @param  {Object} data
 * @return {Request}
 */
Integrations.prototype.post = Integrations.prototype.create = function(integrationName, data) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings');

    return this._super.post(path, data);
}

/**
 * Update an integration map
 * @param  {String} integrationName
 * @param  {Number} mappingId
 * @param  {Object} data
 * @return {Request}
 */
Integrations.prototype.put = Integrations.prototype.update = function(integrationName, mappingId, data) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    return this._super.put(path, data);
}
/**
 * Delete an integration mapping
 * @param  {String} integrationName
 * @param  {Number} mappingId
 * @return {Request}
 */
Integrations.prototype.del = function(integrationName, mappingId) {
    var path = this._super.buildPath(this._baseMethod, integrationName, 'relationshipmappings', mappingId);
    return this._super.del(path);
}

module.exports = Integrations;