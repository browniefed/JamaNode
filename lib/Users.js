/**
 * Manager the users in the system (you must have appropriate permissions)
 * @mixin
 */
var Users = function(_super) {
    this._super = _super;
    this._baseMethod = 'users';
}
/**
 * Get a list of users or a specific User
 * @param  {Number|Object|undefined} userId
 * @param  {Object } data
 * @return {Request}
 */
Users.prototype.get = function(userId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (userId) {
        path = this._super.buildPath(this._baseMethod, userId);
    } else {
        data = userId;
    }

    return this._super.get(path, data);
}
/**
 * create a new user
 * @param  {Object} data
 * @return {Request}
 */
Users.prototype.post = Users.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}
/**
 * update a user
 * @param  {Number} userId
 * @param  {Object} data
 * @return {Request}
 */
Users.prototype.put = Users.prototype.update = function(userId, data) {
    var path = tthis._super.buildPath(this._baseMethod, userId);
    return this._super.put(path);
}
/**
 * Update the activte status of a user
 * @param  {Number} userId
 * @param  {Object} data
 * @return {Request}
 */
Users.prototype.active = function(userId, data) {
    var path = this._super.buildPath(this._baseMethod, userId, 'active');
    return this._super.put(path);
}
/**
 * get the information for the currently authenticated user
 * @return {Request}
 */
Users.prototype.current = function() {
    var path = this._super.buildPath(this._baseMethod, 'current');
    return this._super.get(path);
}
/**
 * Get the current authenticated users favorite filters
 * @return {Request}
 */
Users.prototype.favoriteFilters = function() {
    var path = this._super.buildPath(this._baseMethod, 'current/favoritefilters');
    return this._super.get(path);
}
/** 
 * Get the current authenticated users recently visted projects
 * @param  {Object} data
 * @return {Request}
 */
Users.prototype.recentProjects = function(data) {
    var path = this._super.buildPath(this._baseMethod, 'current/recentprojects');
    return this._super.get(path, data);
}

module.exports = Users;