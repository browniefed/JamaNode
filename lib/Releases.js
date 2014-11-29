/**
 * Get releases
 * @mixin
 */
var Releases = function(_super) {
    this._super = _super;
    this._baseMethod = 'releases';
}
/**
 * Get a list of releases or information on a single release
 * @param  {Number|Object|undefined} releaseId
 * @param  {Object} data
 * @return {Request}
 */
Releases.prototype.get = function(releaseId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (releaseId) {
        path = this._super.buildPath(this._baseMethod, releaseId);
    } else {
        data = releaseId;
    }

    return this._super.get(path);
}

module.exports = Releases;