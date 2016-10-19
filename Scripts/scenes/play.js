var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            // Initialize score to 0
            this._score = 0;
            // Initialize paused boolean
            this._paused = false;
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this._bg.regX = 0;
            this.addChild(this._bg);
            this._bg2 = new createjs.Bitmap(assets.getResult("BG"));
            this._bg2.regX = 0;
            this._bg2.x = 1590;
            this.addChild(this._bg2);
            // Add blur filter
            this._blurFilter = new createjs.BlurFilter(5, 5, 4);
            this._bg.filters = [this._blurFilter];
            this._bounds = this._bg.getBounds();
            this._bg.cache(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height);
            this._bg2.filters = [this._blurFilter];
            this._bounds = this._bg2.getBounds();
            this._bg2.cache(this._bounds.x, this._bounds.y, this._bounds.width, this._bounds.height);
            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);
            // Add pause button
            this._pauseBtn = new objects.Button("Pause", config.Screen.CENTER_X + 360, config.Screen.CENTER_Y - 260);
            this._pauseBtn.scaleX = 0.5;
            this._pauseBtn.scaleY = 0.5;
            this._pauseBtn.cursor = "pointer";
            this.addChild(this._pauseBtn);
            this._pauseBtn.on("click", this._pauseBtnClick, this);
            // Add enemy
            this._runner = new objects.Runner("run");
            this._runner.x = config.Screen.CENTER_X;
            this._runner.y = config.Screen.CENTER_Y;
            this.addChild(this._runner);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            if (!this._paused) {
                // Update runner
                this._runner.update();
                // Update score
                this._score += 10;
                this._scoreLabel.text = ("Score: " + this._score);
                // Scroll and recycle backgrounds
                this._bg.x -= 1;
                this._bg2.x -= 1;
                if (this._bg.x < -1590) {
                    this._bg.x = 1590;
                }
                if (this._bg2.x < -1590) {
                    this._bg2.x = 1590;
                }
            }
        };
        Play.prototype._pauseBtnClick = function (event) {
            this._paused = this._paused ? false : true;
            this._runner.run();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map