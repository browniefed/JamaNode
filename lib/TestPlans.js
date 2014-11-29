var TestPlans = function(_super) {
    this._super = _super;
    this._baseMethod = 'testplans';
}

TestPlans.prototype.get = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (testPlanId) {
        path = this._super.buildPath(this._baseMethod, testPlanId);
    } else {
        data = testPlanId;
    }
    return this._super.get(path, data);
}

TestPlans.prototype.post = TestPlans.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}

TestPlans.prototype.put = TestPlans.prototype.update = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId);
    return this._super.put(path, data);
}

TestPlans.prototype.del = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId);
    return this._super.del(path, data);
}

TestPlans.prototype.updateArchived = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'archived');
    return this._super.put(path, data);
}

TestPlans.prototype.getTestgroups = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups');
    return this._super.get(path);
}

TestPlans.prototype.addTestgroup = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups');
    return this._super.post(path, data);
}

TestPlans.prototype.getTestgroup = function(testPlanId, testGroupId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId);
    return this._super.get(path);
}

TestPlans.prototype.updateTestgroup = function(testPlanId, testGroupId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId);
    return this._super.put(path, data);
}

TestPlans.prototype.deleteTestgroup = function(testPlanId, testGroupId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId);
    return this._super.del(path);
}

TestPlans.prototype.getTestgroupTestcases = function(testPlanId, testGroupId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId, 'testcases');
    return this._super.get(path);
}

TestPlans.prototype.addTestgroupTestcases = function(testPlanId, testGroupId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId, 'testcases');
    return this._super.post(path, data);
}

TestPlans.prototype.getTestgroupTestcase = function(testPlanId, testGroupId, testCaseId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId, 'testcases', testCaseId);
    return this._super.get(path);
}

TestPlans.prototype.deleteTestgroupTestcase = function(testPlanId, testGroupId, testCaseId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testgroups', testGroupId, 'testcases', testCaseId);
    return this._super.del(path);
}

TestPlans.prototype.getAttachments = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'attachments');
    return this._super.get(path);
}

TestPlans.prototype.addAttachment = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'attachments');
    return this._super.get(path);
}

TestPlans.prototype.deleteAttachment = function(testPlanId, attachmentId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'attachments', attachmentId);
    return this._super.del(path);
}

TestPlans.prototype.getLock = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'lock');
    return this._super.get(path);
}

TestPlans.prototype.updateLock = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'lock');
    return this._super.put(path, data);
}

TestPlans.prototype.getTestcycles = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testcycles');
    return this._super.get(path);
}

TestPlans.prototype.addTestcycle = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'testcycles');
    return this._super.post(path, data);
}

TestPlans.prototype.getUpstreamRelated = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'upstreamrelated');
    return this._super.get(path);
}

TestPlans.prototype.getDownstreamRelated = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'downstreamrelated');
    return this._super.get(path);
}

TestPlans.prototype.getUpstreamRelationships = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'upstreamrelationships');
    return this._super.get(path);
}

TestPlans.prototype.getDownstreamRelationships = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'downstreamrelationships');
    return this._super.get(path);
}

TestPlans.prototype.getLinks = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'links');
    return this._super.get(path);
}

TestPlans.prototype.addLink = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'links');
    return this._super.post(path, data);
}

TestPlans.prototype.getLink = function(testPlanId, linkId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'links', linkId);
    return this._super.get(path);
}

TestPlans.prototype.updateLink = function(testPlanId, linkId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'links', linkId);
    return this._super.put(path, data);
}

TestPlans.prototype.deleteLink = function(testPlanId, linkId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'links', linkId);
    return this._super.del(path);
}

TestPlans.prototype.getTags = function(testPlanId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'tags');
    return this._super.get(path);
}

TestPlans.prototype.addTagg = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'tags');
    return this._super.post(path, data);
}

TestPlans.prototype.getTag = function(testPlanId, tagId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'tags', tagId);
    return this._super.get(path);
}

TestPlans.prototype.deleteTag = function(testPlanId, tagId) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'tags', tagId);
    return this._super.del(path);
}

TestPlans.prototype.getActivities = function(testPlanId, data) {
    var path = this._super.buildPath(this._baseMethod, testPlanId, 'activities');
    return this._super.get(path, data);
}
module.exports = TestPlans;