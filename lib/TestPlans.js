var TestPlans = function(_super) {
    this._super = _super;
    this._baseMethod = 'testplans';
}

TestPlans.prototype.get = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId);
    return this._super.get(path);
}

module.exports = TestPlans;