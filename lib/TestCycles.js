/**
 * manager test cycles
 * @mixin
 */
var TestCycles = function(_super) {
    this._super = _super;
    this._baseMethod = 'testcycles';
}
/**
 * Get a list of test cycles or a specific test cycle
 * @param  {Number|undefined} testCycleId
 * @return {Request}
 */
TestCycles.prototype.get = function(testCycleId) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.get(path);
}
/**
 * Update a test cycle
 * @param  {Number} testCycleId
 * @param  {Object} data
 * @return {Request}
 */
TestCycles.prototype.put = TestCycles.prototype.update = function(testCycleId, data) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.put(path, data);
}
/**
 * Delete a test cycle
 * @param  {Number} testCycleId
 * @return {Request}
 */
TestCycles.prototype.del = function(testCycleId) {
    var path = this._super.buildPath(this._baseMethod, testCycleId);
    return this._super.del(path);
}
/** 
 * Get test runs for a specific test cycle
 * @param  {Number} testCycleId
 * @param  {Object} data
 * @return {Request}
 */
TestCycles.prototype.getTestruns = function(testCycleId, data) {
    var path = this._super.buildPath(this._baseMethod, testCycleId, 'testruns');
    return this._super.get(path, data);
}

module.exports = TestCycles;