var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // Button 
        // Filter
        // GameObject
        function Instructions() {
            _super.call(this);
            this.start();
        }
        Instructions.prototype.start = function () {
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            stage.addChild(this);
        };
        Instructions.prototype.update = function () {
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map