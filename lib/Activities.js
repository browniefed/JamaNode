var Activities = function(_super) {
    this._super = _super;
    this._baseMethod = 'activities';
}

Activities.prototype.get = function(activityId) {
    var path = this._super.buildPath(this._baseMethod);
    if (activityId) {
        path = this._super.buildPath(this._baseMethod, activityId);
    }

    return this._super.get(path);
}
Activities.prototype.restore = function() {

}

module.exports = Activities;