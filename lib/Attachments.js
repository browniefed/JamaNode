var Attachments = function(_super) {
    this._super = _super;
    this._baseMethod = 'attachments';
}

Attachments.prototype.get = function(attachmentId) {
    var path = this._super.buildPath(this._baseMethod);
    if (attachmentId) {
        path = this._super.buildPath(this._baseMethod, attachmentId);
    }

    return this._super.get(path);
}

Attachments.prototype.put = Attachments.prototype.update = function(attachmentId, data) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'file');
    return this._super.put(path, data);
}

Attachments.prototype.getFile = function(superId) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'file');

    return this._super.get(path);
}

Attachments.prototype.getLocked = function(superId) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'lock');

    return this._super.get(path);
}

Attachments.prototype.updateLocked = function(superId, data) {
    var path = this._super.buildPath(this._baseMethod, attachmentId, 'lock');

    return this._super.put(path);
}

module.exports = Attachments;