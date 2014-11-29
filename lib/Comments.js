var Comments = function(_super) {
    this._super = _super;
    this._baseMethod = 'comments';
}

Comments.prototype.get = function(commentId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (commentId) {
        path = this._super.buildPath(this._baseMethod, commentId);
    } else {
        data = commentId;
    }

    return this._super.get(path, data);
}
Comments.prototype.post = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}

Comments.prototype.replies = function(commentId, data) {
    var path = this._super.buildPath(this._baseMethod, commentId, 'replies')
    return this._super.get(path, data);
}

module.exports = Comments;