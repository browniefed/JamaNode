var TestRuns = function(_super) {
    this._super = _super;
    this._baseMethod = 'testruns';
}

TestRuns.prototype.get = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId);
    return this._super.get(path);
}

module.exports = TestRuns;