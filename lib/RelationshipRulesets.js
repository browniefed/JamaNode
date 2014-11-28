var RelationshipRulesets = function(_super) {
    this._super = _super;
    this._baseMethod = 'relationshiprulesets';
}

RelationshipRulesets.prototype.get = function(rulesetId) {
    var path = this._super.buildPath(this._baseMethod);
    if (rulesetId) {
        path = this._super.buildPath(this._baseMethod, rulesetId);
    }

    return this._super.get(path);
}

RelationshipRulesets.prototype.put = RelationshipRulesets.prototype.update = function(rulesetId, data) {
    var path = this._super.buildPath(this._baseMethod, rulesetId);
    return this._super.put(path, data);
}

RelationshipRulesets.prototype.del = function(rulesetId) {
    var path = this._super.buildPath(this._baseMethod, rulesetId);
    return this._super.del(path);
}

RelationshipRulesets.prototype.post = RelationshipRulesets.prototype.create = function(data) {
    return this._super.post(this._super.buildPath(this._baseMethod), data);
}

RelationshipRulesets.prototype.projects = function(rulesetId) {
    var path = this._super.buildPath(this._baseMethod, rulesetId, 'projects');
    return this._super.get(path, data);
}

module.exports = RelationshipRulesets;