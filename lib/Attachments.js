/**
 * Handle global attachments
 * @mixin
 */
var Attachments = function(_super) {
    this._super = _super;
    this._baseMethod = 'attachments';
}
/**
 * Get all attachments or an attachment by id
 * @param  {String|undefined} attachmentId
 * @return {Request}
 * @example
 * JamaApi.attachments.get().end(function(err, res) {
 * })
 * JamaApi.attachments.get(100).end(function(err, res) {
 * }})
 */
Attachments.prototype.get = function(attachmentId) {
    var path = this._super.buildPath(this._baseMethod);
    if (attachmentId) {
        path = this._super.buildPath(this._baseMethod, attachmentId);
    }

    return this._super.get(path);
}
/**
 * Update an attachemnt with new info
 * @param  {Number} attachmentId
 * @param  {Object} data
 * @return {Request}
 */
Attachments.prototype.put = Attachments.prototype.update = function(attachmentId, data) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'file');
    return this._super.put(path, data);
}
/**
 * Get an attachemnt by id
 * @param  {Number} attachmentId attachmentId
 * @return {Request}
 */
Attachments.prototype.getFile = function(attachmentId) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'file');

    return this._super.get(path);
}
/**
 * Get the locked status of an attachment
 * @param  {Number} attachmentId
 * @return {Request}
 */
Attachments.prototype.getLocked = function(attachmentId) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'lock');

    return this._super.get(path);
}
/**
 * Update the locked status of an attachment
 * @param  {Number} attachmentId
 * @param  {Object} data
 * @param  {Boolean} data.locked Lock or unlock the attachment
 * @return {Request}
 */
Attachments.prototype.updateLock = function(attachmentId, data) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'lock');

    return this._super.put(path);
}

module.exports = Attachments;