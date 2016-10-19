var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Smoke = (function (_super) {
        __extends(Smoke, _super);
        function Smoke(imageString) {
            _super.call(this, smokeAtlas, imageString);
            this.gotoAndPlay(imageString);
        }
        Smoke.prototype.update = function () {
        };
        Smoke.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Smoke.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Smoke.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        return Smoke;
    }(objects.GameObject));
    objects.Smoke = Smoke;
})(objects || (objects = {}));
//# sourceMappingURL=smoke.js.map