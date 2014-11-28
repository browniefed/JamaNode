var TestCycles = function(_super) {
    this._super = _super;
    this._baseMethod = 'testcycles';
}

TestCycles.prototype.get = function(testCycleId) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.get(path);
}

module.exports = TestCycles;