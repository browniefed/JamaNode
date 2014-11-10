var PicklistOptions = function(_super) {
    this._super = _super;
    this._baseMethod = 'picklistoptions';
}

PicklistOptions.prototype.get = function(picklistOptionId) {
    var path = this._super.buildPath(this._baseMethod, picklistOptionId);

    return this._super.get(path);
}

module.exports = PicklistOptions;