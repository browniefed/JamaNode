var Comments = function(_super) {
    this._super = _super;
    this._baseMethod = 'comments';
}

Comments.prototype.get = function(commentId) {
    var path = this._super.buildPath(this._baseMethod);
    if (commentId) {
        path = this._super.buildPath(this._baseMethod, commentId);
    }

    return this._super.get(path);
}
Comments.prototype.post = function() {

}

Comments.prototype.replies = function(commentId) {
    return this._super.get(this._super.buildPath(this._baseMethod, commentId, 'replies'));
}

module.exports = Comments;