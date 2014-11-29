var Users = function(_super) {
    this._super = _super;
    this._baseMethod = 'users';
}

Users.prototype.get = function(userId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (userId) {
        path = this._super.buildPath(this._baseMethod, userId);
    } else {
        data = userId;
    }

    return this._super.get(path, data);
}

Users.prototype.post = Users.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}

Users.prototype.put = Users.prototype.update = function(userId, data) {
    var path = tthis._super.buildPath(this._baseMethod, userId);
    return this._super.put(path);
}

Users.prototype.active = function(userId, data) {
    var path = this._super.buildPath(this._baseMethod, userId, 'active');
    return this._super.put(path);
}

Users.prototype.current = function() {
    var path = this._super.buildPath(this._baseMethod, 'current');
    return this._super.get(path);
}

Users.prototype.favoriteFilters = function() {
    var path = this._super.buildPath(this._baseMethod, 'current/favoritefilters');
    return this._super.get(path);
}

Users.prototype.recentProjects = function(data) {
    var path = this._super.buildPath(this._baseMethod, 'current/recentprojects');
    return this._super.get(path, data);
}

module.exports = Users;