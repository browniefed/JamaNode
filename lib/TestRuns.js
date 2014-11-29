var TestRuns = function(_super) {
    this._super = _super;
    this._baseMethod = 'testruns';
}

TestRuns.prototype.get = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId);
    return this._super.get(path);
}

TestRuns.prototype.put = TestRuns.prototype.update = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId);
    return this._super.put(path, data);
}

TestRuns.prototype.getAttachments = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'attachments');
    return this._super.get(path, data);
}
TestRuns.prototype.addAttachment = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'attachments');
    return this._super.post(path, data);
}

TestRuns.prototype.removeAttachment = function(testRunId, attachmentId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'attachments', attachmentId);
    return this._super.del(path);
}

TestRuns.prototype.getLock = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'lock');
    return this._super.get(path);
}

TestRuns.prototype.updateLock = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'lock');
    return this._super.put(path, data);
}

TestRuns.prototype.getUpstreamRelated = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'upstreamrelated');
    return this._super.get(path);
}

TestRuns.prototype.getDownstreamRelated = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'downstreamrelated');
    return this._super.get(path);
}

TestRuns.prototype.getUpstreamRelationships = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'upstreamrelationships');
    return this._super.get(path);
}

TestRuns.prototype.getDownstreamRelationships = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'downstreamrelationships');
    return this._super.get(path);
}

TestRuns.prototype.getLinks = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'links');
    return this._super.get(path);
}

TestRuns.prototype.addLink = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'links');
    return this._super.post(path, data);
}

TestRuns.prototype.getLink = function(testRunId, linkId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'links', linkId);
    return this._super.get(path);
}

TestRuns.prototype.updateLink = function(testRunId, linkId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'links', linkId);
    return this._super.put(path, data);
}

TestRuns.prototype.deleteLink = function(testRunId, linkId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'links', linkId);
    return this._super.del(path);
}

TestRuns.prototype.getTags = function(testRunId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'tags');
    return this._super.get(path);
}

TestRuns.prototype.addTag = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'tags');
    return this._super.post(path, data);
}

TestRuns.prototype.getTag = function(testRunId, tagId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'tags', tagId);
    return this._super.get(path);
}

TestRuns.prototype.deleteTag = function(testRunId, tagId) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'tags', tagId);
    return this._super.del(path);
}

TestRuns.prototype.getActivities = function(testRunId, data) {
    var path = this._super.buildPath(this._baseMethod, testRunId, 'activities');
    return this._super.get(path, data);
}
module.exports = TestRuns;