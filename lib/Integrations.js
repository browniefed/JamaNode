var Integrations = function(_super) {
    this._super = _super;
    this._baseMethod = 'integrations';
}

Integrations.prototype.get = function() {
    var path = this._super.buildPath(this._baseMethod);

    return this._super.get(path);
}

module.exports = Integrations;