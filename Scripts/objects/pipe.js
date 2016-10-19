var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Pipe = (function (_super) {
        __extends(Pipe, _super);
        function Pipe(imageString) {
            _super.call(this, pipeAtlas, imageString);
            this.gotoAndPlay(imageString);
        }
        Pipe.prototype.update = function () {
        };
        Pipe.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Pipe.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Pipe.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        Pipe.prototype._dead = function () {
        };
        return Pipe;
    }(objects.GameObject));
    objects.Pipe = Pipe;
})(objects || (objects = {}));
//# sourceMappingURL=pipe.js.map