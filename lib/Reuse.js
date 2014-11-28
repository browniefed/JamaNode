var Reuse = function(_super) {
    this._super = _super;
    this._baseMethod = 'reuse';
}

Reuse.prototype.rules = function(ruleId) {
    var path = this._super.buildPath(this._baseMethod, 'rules');
    if (ruleId) {
        path = this._super.buildPath(this._baseMethod, 'rules', rulesId);
    }
    return this._super.get(path);
}

Reuse.prototype.validItemtypes = function(ruleId) {
    var path = this._super.buildPath(this._baseMethod, 'validItemtypes');
    if (ruleId) {
        this._super.buildPath(this._baseMethod, 'rules', ruleId, 'validItemtypes');
    }
    return this._super.get(path);
}

Reuse.prototype.post = Reuse.prototype.reuse = function(data) {
    var path = this._super.buildPath(this._baseMethod);
    return this._super.post(path, data);
}
Reuse.prototype.sync = function(data) {
    var path = this._super.buildPath(this._baseMethod, 'sync');
    return this._super.post(path, data);
}
module.exports = Reuse;