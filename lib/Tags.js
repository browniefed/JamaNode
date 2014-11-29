/**
 * Manage tags and get items related to tags
 * @mixin
 */
var Tags = function(_superMethod, _super) {
    this._superMethod = _superMethod;
    this._super = _super;
    this._baseMethod = 'tags'
}

var constructPath = '%(_superMethod)/%(_superId)/%(_baseMethod)',
    tagPath = '/%(_tagId)',
    fullTagPath = constructPath + tagPath;

/**
 * Get a list of tags or information about a specific tag
 * @param  {Number} superId
 * @param  {Number} tagId
 * @return {Request}
 */
Tags.prototype.get = function(superId, tagId) {
    var baseConstructPath = constructPath,
        args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId
        };

    if (tagId) {
        baseConstructPath += tagPath;
        args.tagId = tagId;
    }

    return this._super.get(this._super.buildNamePath(baseConstructPath, args));
};
/**
 * Create a new tag
 * @param  {Number} superId
 * @param  {Object} data
 * @return {Request}
 */
Tags.prototype.post = Tags.prototype.create = function(superId, data) {
    var baseConstructPath = constructPath,
        args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId
        };

    return this._super.post(this._super.buildNamePath(baseConstructPath, args), data);
}
/**
 * Update a tag
 * @param  {Number} superId
 * @param  {Number} tagId
 * @param  {Object} data
 * @return {Request}
 */
Tags.prototype.put = Tags.prototype.update = function(superId, tagId, data) {
    var baseConstructPath = constructPath,
        args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId
        };

    if (tagId) {
        baseConstructPath += tagPath;
        args.tagId = tagId;
    }

    return this._super.put(this._super.buildNamePath(baseConstructPath, args), data);
}
/**
 * Delete a tag
 * @param  {Number} superId
 * @param  {Number} tagId
 * @return {Request}
 */
Tags.prototype.delete = function(superId, tagId) {
    var args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId,
            _tagId: tagId
        };

    return this._super.del(this._super.buildNamePath(fullTagPath, args));
}
/**
 * Get items associated with a tag
 * @param  {Number} superId
 * @param  {Number} tagId
 * @return {Request}
 */
Tags.prototype.items = function(superId, tagId) {
    var baseConstructPath = fullTagPath + '/items',
        args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId,
            _tagId: tagId
        };
    return this._super.get(this._super.buildNamePath(baseConstructPath, args));
}

module.exports = Tags;