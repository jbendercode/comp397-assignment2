var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Runner = (function (_super) {
        __extends(Runner, _super);
        function Runner(imageString) {
            _super.call(this, runnerAtlas, imageString);
            this.gotoAndPlay(imageString);
            this._running = true;
            window.onkeydown = this._onKeyDown;
            window.onkeyup = this._onKeyUp;
        }
        Runner.prototype.update = function () {
            if (!controls.UP) {
                this.scaleY = -1;
                this.y = this.y = config.Screen.CENTER_Y + 90;
            }
            else {
                this.scaleY = 1;
                this.y = config.Screen.CENTER_Y;
            }
        };
        Runner.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Runner.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Runner.prototype._dead = function () {
            _super.prototype.destroy.call(this);
        };
        Runner.prototype.run = function () {
            this._running = this._running ? false : true;
            if (!this._running) {
                this.gotoAndPlay("stand");
            }
            else {
                this.gotoAndPlay("run");
            }
        };
        Runner.prototype._onKeyDown = function (event) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.UP = false;
                    break;
            }
        };
        Runner.prototype._onKeyUp = function (event) {
            switch (event.keyCode) {
                case keys.SPACE:
                    controls.UP = true;
                    break;
            }
        };
        return Runner;
    }(objects.GameObject));
    objects.Runner = Runner;
})(objects || (objects = {}));
//# sourceMappingURL=runner.js.map