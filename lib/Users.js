var Users = function(_super) {
    this._super = _super;
    this._baseMethod = 'users';
}

Users.prototype.get = function(userId) {
    var path = this._super.buildPath(this._baseMethod);
    if (userId) {
        path = this._super.buildPath(this._baseMethod, userId);
    }

    return this._super.get(path);
}

Users.prototype.current = function() {
    var path = this._super.buildPath(this._baseMethod, 'current');
    return this._super.get(path);
}

User.prototype.favoriteFilters = function() {
    var path = this._super.buildPath(this._baseMethod, 'current/favoritefilters');
    return this._super.get(path);
}

module.exports = Users;