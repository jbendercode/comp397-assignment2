var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // Button 
        // Filter
        // GameObject
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            // Initialize score to 0
            this._score = 0;
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._scoreLabel.text = ("Score: " + this._score);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map