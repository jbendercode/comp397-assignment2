var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString) {
            _super.call(this, enemyAtlas, imageString, "kill");
            this._life = this._randomLifeValue();
            this.setPosition(this._randomPosition());
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
            if (this._life == 0) {
                this._dead();
            }
        };
        Enemy.prototype._dead = function () {
            _super.prototype.destroy.call(this);
        };
        Enemy.prototype._randomLifeValue = function () {
            // Generate a random health value between 1 and 5
            return Math.floor((Math.random() * 5) + 1);
        };
        Enemy.prototype._randomPosition = function () {
            // Generate a random position within the bounds of the scene
            var _posX = Math.floor((Math.random() * config.Screen.WIDTH - 100) + 100);
            var _posY = Math.floor((Math.random() * config.Screen.HEIGHT - 100) + 100);
            return new objects.Vector2(_posX, _posY);
        };
        return Enemy;
    }(objects.GameObject));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map