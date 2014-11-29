var TestCycles = function(_super) {
    this._super = _super;
    this._baseMethod = 'testcycles';
}

TestCycles.prototype.get = function(testCycleId) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.get(path);
}

TestCycles.prototype.put = TestCycles.prototype.update = function(testCycleId, data) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.put(path, data);
}

TestCycles.prototype.del = function(testCycleId) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.del(path);
}

TestCycles.prototype.getTestruns = function(testCycleId, data) {
    var path = this._super.buildPath(this._baseMethod, testCycleId, 'testruns');
    return this._super.get(path, data);
}

module.exports = TestCycles;