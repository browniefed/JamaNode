/**
 * Get activities that happened in the system
 * @mixin
 */
var Activities = function(_super) {
    this._super = _super;
    this._baseMethod = 'activities';
}
/**
 * get all activities or a specific activity
 * @param  {Number|Object} activityId
 * @param  {Object} data queryParams to pass in
 * @return {Request}
 * @example
 * JamaApi.activities.get(100).end(function(err, res) {
 * 
 * });
 *
 * JamaApi.activities.get({maxResults: 30}).end(function(err, res) {
 * 
 * })
 */
Activities.prototype.get = function(activityId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (activityId) {
        path = this._super.buildPath(this._baseMethod, activityId);
    } else {
        data = activityId;
    }

    return this._super.get(path, data);
}
/**
 * Restore an activity
 * @param  {Number} activityId
 * @return {Request}
 * @example
 * JamaApi.activities.restore(100).end(function(err, res) {
 * })
 */
Activities.prototype.restore = function(activityId) {
    var path = this._super.buildPath(this._baseMethod, activityId, 'restore');
    return this._super.post(path);
}

module.exports = Activities;