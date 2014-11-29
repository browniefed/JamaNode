/**
 * Get comments in the system
 * @mixin
 */
var Comments = function(_super) {
    this._super = _super;
    this._baseMethod = 'comments';
}
/**
 * Get a comment list or comment by id
 * @param  {Number|Object|Undefined} commentId
 * @param  {Object} data
 * @return {Request}
 */
Comments.prototype.get = function(commentId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (commentId) {
        path = this._super.buildPath(this._baseMethod, commentId);
    } else {
        data = commentId;
    }

    return this._super.get(path, data);
}
/**
 * Submit a new comment
 * @param  {Object} data
 * @return {Request}
 */
Comments.prototype.post = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}
/**
 * Get the replies for a particular comment
 * @param  {Number} commentId
 * @param  {Object} data
 * @return {Request}
 */
Comments.prototype.replies = function(commentId, data) {
    var path = this._super.buildPath(this._baseMethod, commentId, 'replies')
    return this._super.get(path, data);
}

module.exports = Comments;