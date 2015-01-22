var Items = function(_super) {
    this._super = _super;
    this._baseMethod = 'items';
}

Items.prototype.getRelatedItemsByDirection = function(itemId, direction) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'relationships', direction);
    return this._super.get(path);
}

Items.prototype.getRelationshipStats = function() {
    var path = this._super.buildPath(this._baseMethod, itemId, 'relationships/stats');
    return this._super.get(path);
}

Items.prototype.get = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod);
    if (itemId) {
        path = this._super.buildPath(this._baseMethod, itemId);
    } else {
        data = itemId;
    }
    return this._super.get(path, data);
}

Items.prototype.post = Items.prototype.create = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}

Items.prototype.put = Items.prototype.update = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId);
    return this._super.put(path, data);
}

Items.prototype.del = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId);
    return this._super.del(path);
}

Items.prototype.getAttachements = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'attachments');
    return this._super.get(path, data);
}

Items.prototype.addAttachment = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'attachments');
    return this._super.post(path, data);
}

Items.prototype.deleteAttachment = function(itemId, attachmentId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'attachments', attachmentId);
    return this._super.del(path);
}

Items.prototype.getLock = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'lock');
    return this._super.get(path);
}

Items.prototype.updateLock = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'lock');
    return this._super.put(path, data);
}

Items.prototype.getParent = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'parent');
    return this._super.get(path, data);
}

Items.prototype.getChildren = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'children');
    return this._super.get(path, data);
}

Items.prototype.getUpstreamRelated = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'upstreamrelated');
    return this._super.get(path);
}

Items.prototype.getDownstreamRelated = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'downstreamrelated');
    return this._super.get(path);
}

Items.prototype.getUpstreamRelationships = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'upstreamrelationships');
    return this._super.get(path);
}

Items.prototype.getDownstreamRelationships = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'downstreamrelationships');
    return this._super.get(path);
}

Items.prototype.updateWorkflowTransition = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'workflowtransitions');
    return this._super.post(path, data);
}

Items.prototype.getWorkflowTransitions = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'workflowtransitionoptions');
    return this._super.get(path);
}

Items.prototype.getSyncedItems = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'synceditems');
    return this._super.get(path);
}

Items.prototype.addSyncedItem = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'synceditems');
    return this._super.post(path, data);
}

Items.prototype.removeSyncedItem = function(itemId, syncedItemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'synceditems', syncedItemId);
    return this._super.del(path);
}

Items.prototype.getSyncedItemStatus = function(itemId, syncedItemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'synceditems', syncedItemId, 'syncstatus');
    return this._super.get(path);
}

Items.prototype.getLinks = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'links');
    return this._super.get(path);
}

Items.prototype.addLink = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'links');
    return this._super.post(path, data);
}

Items.prototype.getLink = function(itemId, linkId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'links', linkId);
    return this._super.get(path);
}

Items.prototype.updateLink = function(itemId, linkId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'links', linkId);
    return this._super.put(path, data);
}

Items.prototype.deleteLink = function(itemId, linkId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'links', linkId);
    return this._super.del(path);
}

Items.prototype.getTags = function(itemId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'tags');
    return this._super.get(path);
}

Items.prototype.addTag = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'tags');
    return this._super.post(path, data);
}

Items.prototype.getTag = function(itemId, tagId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'tags', tagId);
    return this._super.get(path);
}

Items.prototype.deleteTag = function(itemId, tagId) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'tags', tagId);
    return this._super.del(path);
}

Items.prototype.getActivities = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'activities');
    return this._super.get(path, data);
}

Items.prototype.getComments = function(itemId, data) {
    var path = this._super.buildPath(this._baseMethod, itemId, 'comments');
    return this._super.get(path, data);
}



module.exports = Items;