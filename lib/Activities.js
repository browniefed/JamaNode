var Activities = function(_super) {
    this._super = _super;
    this._baseMethod = 'activities';
}

Activities.prototype.get = function(activityId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (activityId) {
        path = this._super.buildPath(this._baseMethod, activityId);
    } else {
        data = activityId;
    }

    return this._super.get(path, data);
}
Activities.prototype.restore = function(activityId, data) {
    var path = this._super.buildPath(this._baseMethod, activityId, 'restore');
    return this._super.post(path, data);
}

module.exports = Activities;