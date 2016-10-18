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
            var _this = this;
            // Initialize score to 0
            this._score = 0;
            // Add bg
            this._bg = new createjs.Bitmap(assets.getResult("GameBank"));
            this.addChild(this._bg);
            // Add score label
            this._scoreLabel = new objects.Label("Score: 0", "26px Consolas", "#FFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 280);
            this.addChild(this._scoreLabel);
            // Add enemy
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            // OnClick for Enemy
            this._enemy.addEventListener("click", function (event) { return _this._onEnemyClick(event); });
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._scoreLabel.text = ("Score: " + this._score);
            this._enemy.update();
        };
        Play.prototype._onEnemyClick = function (event) {
            var _this = this;
            // Enemy Shot
            console.log("Enemy shot and life is: " + (this._enemy.life - 1));
            this._enemy.shot();
            if (this._enemy.life == 0) {
                this._score += 5;
                setTimeout(function () {
                    _this._newEnemy();
                }, 1000);
            }
        };
        Play.prototype._newEnemy = function () {
            var _this = this;
            // Add enemy
            this._enemy = new objects.Enemy("enemy");
            this.addChild(this._enemy);
            this._enemy.addEventListener("click", function (event) { return _this._onEnemyClick(event); });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map