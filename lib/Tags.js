var Tags = function(_superMethod, _super) {
    this._superMethod = _superMethod;
    this._super = _super;
    this._baseMethod = 'tags'
}

var constructPath = '%(_superMethod)/%(_superId)/%(_baseMethod)',
    tagPath = '/%(_tagId)',
    fullTagPath = constructPath + tagPath;


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
Tags.prototype.add = function(superId, tag) {

}
Tags.prototype.update = function(superId, tag) {

}
Tags.prototype.delete = function(superId, tagId) {
    var args = {
            _superMethod: this._superMethod,
            _baseMethod: this._baseMethod,
            _superId: superId,
            _tagId: tagId
        };

    return this._super.del(this._super.buildNamePath(fullTagPath, args));
}
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